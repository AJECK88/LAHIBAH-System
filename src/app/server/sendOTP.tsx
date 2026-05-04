"use server";

import generateConfirmation from "./Auth/verification";

export async function sendOtp(email: string) {
  await generateConfirmation(email);
}