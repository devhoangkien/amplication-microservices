import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SessionModuleBase } from "./base/session.module.base";
import { SessionService } from "./session.service";
import { SessionResolver } from "./session.resolver";

@Module({
  imports: [SessionModuleBase, forwardRef(() => AuthModule)],
  providers: [SessionService, SessionResolver],
  exports: [SessionService],
})
export class SessionModule {}
