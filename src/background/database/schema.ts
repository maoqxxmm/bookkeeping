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

// 客户端发送的创建模型
export type BillItemCreate = Omit<BillItem<string>, "_id">;

// 数据库里存的模型
export type BillItemDB = BillItem<ObjectId>;

// 客户端使用的模型
export type BillItemApp = BillItem<string>;

// 个人配置
export interface Preference {
  // 月度预算
  monthlyBudget: number;
}

// 账目分类
export interface BillCategory {
  // 标识
  _id: string;
  // 类型：0（支出）| 1（收入）
  type: 0 | 1;
  // 类型的描述文本
  text: string;
}
