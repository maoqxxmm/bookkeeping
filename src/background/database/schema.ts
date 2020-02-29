import { ObjectId } from "mongodb";

export interface BillItem<IdType> {
  // 标识
  _id: IdType;
  // 内容
  content: string;
  // 日期时间戳
  date: number;
  // 类型：0（支出）| 1（收入）
  type: 0 | 1;
  // 分类
  categories: string[];
  // 是否可报销
  reimbursable: boolean;
}

export type BillItemCreate = Omit<BillItem<string>, "_id">;

export type BillItemDB = BillItem<ObjectId>;
