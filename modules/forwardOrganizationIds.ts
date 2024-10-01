import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function forwardOrganizationIds(
  request: ZuploRequest,
  context: ZuploContext
) {
  const orgIds = request.user.data.organizationIds;
  const updatedUrl = new URL(request.url);
  orgIds.forEach(function (value) {
    request.headers.append("organizationIds", value);
  });
  return new ZuploRequest(updatedUrl.toString(), request);
}