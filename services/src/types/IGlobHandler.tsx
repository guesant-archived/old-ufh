export type IGlobHandler<T extends string = string> = {
  _id: string;
  pattern: string;
  handlers: IGlobHandlerEntry<T>[];
};
export type IGlobHandlerEntryConfig = Record<keyof any, any>;

export type IGlobHandlerEntry<
  HandlerID extends string = string,
  HandlerConfig extends IGlobHandlerEntryConfig = IGlobHandlerEntryConfig
> = {
  id: HandlerID;
  config: HandlerConfig;
};
