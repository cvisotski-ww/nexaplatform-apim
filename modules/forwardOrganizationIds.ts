import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function forwardOrganizationIds (request: ZuploRequest, 
context: ZuploContext) {

 const orgIds = request.user.data.organizationIds;
 const updatedUrl = new URL(request.url);
 updatedUrl.searchParams.append('organizationIds', orgIds);
 return new ZuploRequest(updatedUrl.toString(), request);
}