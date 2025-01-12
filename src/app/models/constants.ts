import ConstantData from '../providers/json/constants.json';
export const ROUTE_NAMES = ConstantData.routes;

export class Constants {
    public static get routes(): any {
        return ConstantData.routes;
      }
}