import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryCreateNestedManyWithoutCategoriesInput } from "./CategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categories?: CategoryWhereUniqueInput | null;
  key?: string | null;
  name?: string | null;
  parentId?: CategoryCreateNestedManyWithoutCategoriesInput;
};
