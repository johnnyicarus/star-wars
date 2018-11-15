interface AppConfig {
  entitiesPerPage: number;
  idRegExp: RegExp;
}

export const config: AppConfig = {
  entitiesPerPage: 10,
  idRegExp: /([^\\/]*)\/*$/,
};
