import { GenericPayload } from "../genericPayload";

export class LoginUserSuccessPayload implements GenericPayload {
  user: { email: string; password: string } = { email: "", password: "" };
}
