import { Context } from "aws-lambda";
export const hello = async (event: any, context: Context) => {
    console.log('test', context);
};