import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};

export default async function policy(
  response: Response,
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {

  response.ok == false
  {
    context.log.error({
    status: response.status,
    headers: request.headers,
  });
  }
  

  return response;
}