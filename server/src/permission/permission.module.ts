import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PermissionModuleBase } from "./base/permission.module.base";
import { PermissionService } from "./permission.service";
import { PermissionResolver } from "./permission.resolver";

@Module({
  imports: [PermissionModuleBase, forwardRef(() => AuthModule)],
  providers: [PermissionService, PermissionResolver],
  exports: [PermissionService],
})
export class PermissionModule {}
