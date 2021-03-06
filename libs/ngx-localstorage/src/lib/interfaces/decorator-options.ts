/**
 * Defines the configuration of the {@link ngxLocalStorage} decorator.
 */
export interface DecoratorOpts {
  /**
   * The key to use with localstorage.
   */
  key?: string;
  /**
   * The keys prefix to use.
   */
  prefix?: string;
  /**
   * An optional transformer to handle 'null' values.
   */
  nullTransformer?: () => any;
}
