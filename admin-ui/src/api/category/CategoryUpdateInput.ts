import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categories?: CategoryWhereUniqueInput | null;
  key?: string | null;
  name?: string | null;
  parentId?: CategoryUpdateManyWithoutCategoriesInput;
};
