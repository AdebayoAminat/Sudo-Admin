import { toast } from "sonner";

type PromiseMessages<T> = {
  loading: string;
  success: string | ((value: T) => string);
  error: string | ((err: any) => string);
};

const notify = {
  raw: (message: string) => toast(message),
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast(message),
  promise: <T>(p: Promise<T>, messages: PromiseMessages<T>) => toast.promise(p, messages),
};

export default notify;
