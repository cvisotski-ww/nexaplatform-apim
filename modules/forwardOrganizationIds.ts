import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function forwardOrganizationIds(
  request: ZuploRequest,
  context: ZuploContext
) {
    try {
  const orgIds = request.user.data.organizationIds;
  const updatedUrl = new URL(request.url);
  orgIds.forEach(function (value) {
    request.headers.append("organizationIds", value);
  });
  return new ZuploRequest(updatedUrl.toString(), request);
  } catch (err) {
    context.log.error(err, "Error in inbound policy");
    // You can choose to return an error response or let it propagate
    return request;
  }
}