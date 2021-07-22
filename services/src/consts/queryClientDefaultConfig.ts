import { MutationCache } from "react-query/types/core/mutationCache";
import { QueryCache } from "react-query/types/core/queryCache";
import { DefaultOptions } from "react-query/types";

interface QueryClientConfig {
  queryCache?: QueryCache;
  mutationCache?: MutationCache;
  defaultOptions?: DefaultOptions;
}

export const queryClientDefaultConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};
