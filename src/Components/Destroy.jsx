import { redirect } from "react-router-dom";
import { deleteContact } from "../сontacts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}