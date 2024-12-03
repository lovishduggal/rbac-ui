'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/ui/multi-select';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRole, updateRoleDetails } from '@/http/api';
import { Loader2Icon } from 'lucide-react';
import type { AxiosError } from 'axios';
import type { Role } from '@/types';
import { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  rolename: z
    .string({ required_error: 'Role name is required' })
    .min(1)
    .max(50),
  description: z.string({ required_error: 'Description is required' }).min(1),
  permissions: z.array(z.string()).nonempty('Please at least one permission'),
});

interface UserFormDialogProps {
  title: string;
  description: string;
  btnText: string;
  isEdit?: boolean;
  id?: string;
  isRoleDataLoading?: boolean;
  roleData?: Role;
  children: React.ReactNode;
}
export default function RoleFormDialog({
  title,
  description,
  btnText,
  isEdit = false,
  id,
  isRoleDataLoading = false,
  roleData,
  children,
}: UserFormDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      permissions: ['Read', 'Write', 'Update', 'Delete'],
    },
  });

  const { mutate: createRoleMutate, isPending: isCreateRoleMutatePending } =
    useMutation({
      mutationKey: ['create-role'],
      mutationFn: async (data: z.infer<typeof formSchema>) =>
        await createRole(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['get-all-roles'] });
        setIsDialogOpen(false);
        toast.success('Role Created Successfully');
        form.reset();
      },
      onError: (error: AxiosError) => {
        toast.error(error?.message);
      },
    });

  const {
    mutate: UpdateRoleDetailsMutate,
    isPending: isUpdateRoleDetailsMutatePending,
  } = useMutation({
    mutationKey: ['update-role-details'],
    mutationFn: async (data: z.infer<typeof formSchema>) =>
      await updateRoleDetails({ ...data, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-all-roles'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-role-by-id'],
      });
      setIsDialogOpen(false);
      toast.success('Role Updated Successfully');
      form.reset();
    },
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });

  useEffect(() => {
    if (roleData) {
      form.reset(roleData);
    }
  }, [roleData, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (isEdit) UpdateRoleDetailsMutate(values);
    else createRoleMutate(values);
  }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {!isRoleDataLoading && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-3xl mx-auto  grid grid-cols-2 gap-6"
              >
                <FormField
                  control={form.control}
                  name="rolename"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Admin"
                          type="text"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormDescription>Name of the role</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Full access to all features"
                          className="resize-none"
                          {...field}
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormDescription>Description of the role</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="permissions"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Permissions</FormLabel>
                      <FormControl>
                        <MultiSelector
                          values={field.value}
                          onValuesChange={field.onChange}
                          loop
                          className="w-full h-auto"
                        >
                          <MultiSelectorTrigger>
                            <MultiSelectorInput />
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              <MultiSelectorItem value={'Read'}>
                                Read
                              </MultiSelectorItem>
                              <MultiSelectorItem value={'Write'}>
                                Write
                              </MultiSelectorItem>
                              <MultiSelectorItem value={'Update'}>
                                Update
                              </MultiSelectorItem>
                              <MultiSelectorItem value={'Delete'}>
                                Delete
                              </MultiSelectorItem>
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>
                      </FormControl>
                      <FormDescription>
                        Select permissions of the role
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="col-span-2" type="submit">
                  {isCreateRoleMutatePending ||
                  isUpdateRoleDetailsMutatePending ? (
                    <div className="flex items-center gap-2 ">
                      <Loader2Icon className="animate-spin" />{' '}
                      <span>{`${btnText}ing...`}</span>
                    </div>
                  ) : (
                    btnText
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
