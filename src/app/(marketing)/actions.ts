"use server";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";

export async function setSortValue(formData: FormData) {
  let sort = formData.get("sort");
  let cookieStore = cookies();
  if (sort) {
    cookieStore.set("sort", String(sort));
  }
  revalidatePath("/");
}

export async function getSortValue() {
  let cookieStore = cookies();
  let sort = cookieStore.get("sort");
  return sort?.value ?? "popular";
}
