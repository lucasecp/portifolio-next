"use client";

import { sendMessage } from "@/actions/form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/context/languageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";



export const FormSection = () => {
    const { translate, language } = useLanguage();

    const formSchema = z.object({
        name: z
          .string()
          .transform((value) => value.replace(/\s+/g, ""))
          .pipe(
            z.string().min(2, {
              message: language === 'pt' ? "Seu nome esta faltando.": "Name is required.",
            })
          ),
        email: z
          .string()
          .transform((value) => value.replace(/\s+/g, ""))
          .pipe(
            z.string().email({
              message: language === 'pt' ? "Email obrigatório.": 'Email required',
            })
          ),
        comments: z
          .string()
          .transform((value) => value.replace(/\s+/g, ""))
          .pipe(
            z
              .string()
              .min(2, {
                message: language === 'pt' ? "Campo obrigatório.": 'Please, write your message.',
              })
              .max(300, {
                message: language === 'pt' ? "Você atingiu o máximo de caracteres" : 'You have reached the maximum number of characters',
              })
          ),
      });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comments: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendMessage(values);
      form.reset();
      toast.success( language === 'pt' ? "Obrigado! Responderei em breve :)": 'Thank you for your message :)');
    } catch (e: Error) {
      toast.error(language === 'pt' ? "Algo deu errado, tente novamente mais tarde.": 'something went wrong', {});
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translate('contact','inputA')}</FormLabel>
              <FormControl>
                <Input placeholder={translate('contact','inputA')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translate('contact','inputB')}</FormLabel>
              <FormControl>
                <Textarea placeholder={translate('contact','inputB')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <Button disabled size="lg">
            <Loader2 className="animate-spin" />
            {language === 'pt' ? 'Enviando' : 'Sending'}
          </Button>
        ) : (
          <Button type="submit" size="lg" className="cursor-pointer">
            {language === 'pt' ? 'Enviar' : 'Send'}
          </Button>
        )}
      </form>
    </Form>
  );
};
