import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>;
  divide?: InputMaybe<Scalars['BigInt']['input']>;
  increment?: InputMaybe<Scalars['BigInt']['input']>;
  multiply?: InputMaybe<Scalars['BigInt']['input']>;
  set?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Block = {
  __typename?: 'Block';
  Invoices?: Maybe<Array<Invoices>>;
  Items?: Maybe<Array<Items>>;
  Mailings?: Maybe<Array<Scalars['String']['output']>>;
  Maintenance?: Maybe<Array<Maintenance>>;
  Replacements?: Maybe<Array<Replacements>>;
  Reports?: Maybe<Array<Reports>>;
  Sections?: Maybe<Array<Sections>>;
  Ticket?: Maybe<Array<Ticket>>;
  Users?: Maybe<Array<Users>>;
  _count: BlockCount;
  block_settings?: Maybe<Array<Block_Settings>>;
  catagory?: Maybe<Array<Catagory>>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  invoice_items?: Maybe<Array<Invoice_Items>>;
  location: Scalars['String']['output'];
  machine_catagory?: Maybe<Array<Machine_Catagory>>;
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String']['output'];
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  updated_at: Scalars['DateTime']['output'];
};


export type BlockMachinesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MachinesOrderByWithAggregationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type BlockAvgAggregate = {
  __typename?: 'BlockAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type BlockAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BlockCount = {
  __typename?: 'BlockCount';
  Invoices: Scalars['Int']['output'];
  Items: Scalars['Int']['output'];
  Maintenance: Scalars['Int']['output'];
  Replacements: Scalars['Int']['output'];
  Reports: Scalars['Int']['output'];
  Sections: Scalars['Int']['output'];
  Ticket: Scalars['Int']['output'];
  Users: Scalars['Int']['output'];
  block_settings: Scalars['Int']['output'];
  catagory: Scalars['Int']['output'];
  invoice_items: Scalars['Int']['output'];
  machine_catagory: Scalars['Int']['output'];
  machines: Scalars['Int']['output'];
  routine_maintanances: Scalars['Int']['output'];
};

export type BlockCountAggregate = {
  __typename?: 'BlockCountAggregate';
  Mailings: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type BlockCountOrderByAggregateInput = {
  Mailings?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockCreateInput = {
  Invoices?: InputMaybe<InvoicesCreateNestedManyWithoutBlockInput>;
  Items?: InputMaybe<ItemsCreateNestedManyWithoutBlockInput>;
  Mailings?: InputMaybe<BlockCreateMailingsInput>;
  Maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutBlockInput>;
  Replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutBlockInput>;
  Reports?: InputMaybe<ReportsCreateNestedManyWithoutBlockInput>;
  Sections?: InputMaybe<SectionsCreateNestedManyWithoutBlockInput>;
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutBlockInput>;
  Users?: InputMaybe<UsersCreateNestedManyWithoutBlockInput>;
  block_settings?: InputMaybe<Block_SettingsCreateNestedManyWithoutBlockInput>;
  catagory?: InputMaybe<CatagoryCreateNestedManyWithoutBlockInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutBlockInput>;
  location: Scalars['String']['input'];
  machine_catagory?: InputMaybe<Machine_CatagoryCreateNestedManyWithoutBlockInput>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutBlockInput>;
  name: Scalars['String']['input'];
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutBlockInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlockCreateMailingsInput = {
  set: Array<Scalars['String']['input']>;
};

export type BlockMaxAggregate = {
  __typename?: 'BlockMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type BlockMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockMinAggregate = {
  __typename?: 'BlockMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type BlockMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockOrderByWithAggregationInput = {
  Mailings?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<BlockAvgOrderByAggregateInput>;
  _count?: InputMaybe<BlockCountOrderByAggregateInput>;
  _max?: InputMaybe<BlockMaxOrderByAggregateInput>;
  _min?: InputMaybe<BlockMinOrderByAggregateInput>;
  _sum?: InputMaybe<BlockSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockRelationFilter = {
  is?: InputMaybe<BlockWhereInput>;
  isNot?: InputMaybe<BlockWhereInput>;
};

export type BlockSumAggregate = {
  __typename?: 'BlockSumAggregate';
  id?: Maybe<Scalars['BigInt']['output']>;
};

export type BlockSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BlockUpdateInput = {
  Invoices?: InputMaybe<InvoicesUpdateManyWithoutBlockNestedInput>;
  Items?: InputMaybe<ItemsUpdateManyWithoutBlockNestedInput>;
  Mailings?: InputMaybe<BlockUpdateMailingsInput>;
  Maintenance?: InputMaybe<MaintenanceUpdateManyWithoutBlockNestedInput>;
  Replacements?: InputMaybe<ReplacementsUpdateManyWithoutBlockNestedInput>;
  Reports?: InputMaybe<ReportsUpdateManyWithoutBlockNestedInput>;
  Sections?: InputMaybe<SectionsUpdateManyWithoutBlockNestedInput>;
  Ticket?: InputMaybe<TicketUpdateManyWithoutBlockNestedInput>;
  Users?: InputMaybe<UsersUpdateManyWithoutBlockNestedInput>;
  block_settings?: InputMaybe<Block_SettingsUpdateManyWithoutBlockNestedInput>;
  catagory?: InputMaybe<CatagoryUpdateManyWithoutBlockNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutBlockNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateManyWithoutBlockNestedInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutBlockNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutBlockNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlockUpdateMailingsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BlockWhereInput = {
  AND?: InputMaybe<Array<BlockWhereInput>>;
  Invoices?: InputMaybe<InvoicesListRelationFilter>;
  Items?: InputMaybe<ItemsListRelationFilter>;
  Mailings?: InputMaybe<StringNullableListFilter>;
  Maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  NOT?: InputMaybe<Array<BlockWhereInput>>;
  OR?: InputMaybe<Array<BlockWhereInput>>;
  Replacements?: InputMaybe<ReplacementsListRelationFilter>;
  Reports?: InputMaybe<ReportsListRelationFilter>;
  Sections?: InputMaybe<SectionsListRelationFilter>;
  Ticket?: InputMaybe<TicketListRelationFilter>;
  Users?: InputMaybe<UsersListRelationFilter>;
  block_settings?: InputMaybe<Block_SettingsListRelationFilter>;
  catagory?: InputMaybe<CatagoryListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_items?: InputMaybe<Invoice_ItemsListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  machine_catagory?: InputMaybe<Machine_CatagoryListRelationFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Block_SettingsAvgAggregate = {
  __typename?: 'Block_settingsAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Block_SettingsCountAggregate = {
  __typename?: 'Block_settingsCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type Block_SettingsListRelationFilter = {
  every?: InputMaybe<Block_SettingsWhereInput>;
  none?: InputMaybe<Block_SettingsWhereInput>;
  some?: InputMaybe<Block_SettingsWhereInput>;
};

export type Block_SettingsMaxAggregate = {
  __typename?: 'Block_settingsMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Block_SettingsMinAggregate = {
  __typename?: 'Block_settingsMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Block_SettingsSumAggregate = {
  __typename?: 'Block_settingsSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type CatagoryAvgAggregate = {
  __typename?: 'CatagoryAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type CatagoryCount = {
  __typename?: 'CatagoryCount';
  items: Scalars['Int']['output'];
};

export type CatagoryCountAggregate = {
  __typename?: 'CatagoryCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type CatagoryListRelationFilter = {
  every?: InputMaybe<CatagoryWhereInput>;
  none?: InputMaybe<CatagoryWhereInput>;
  some?: InputMaybe<CatagoryWhereInput>;
};

export type CatagoryMaxAggregate = {
  __typename?: 'CatagoryMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CatagoryMinAggregate = {
  __typename?: 'CatagoryMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CatagoryRelationFilter = {
  is?: InputMaybe<CatagoryWhereInput>;
  isNot?: InputMaybe<CatagoryWhereInput>;
};

export type CatagorySumAggregate = {
  __typename?: 'CatagorySumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Enumticket_StatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Ticket_Status>;
};

export type Enumticket_StatusFilter = {
  equals?: InputMaybe<Ticket_Status>;
  in?: InputMaybe<Array<Ticket_Status>>;
  not?: InputMaybe<NestedEnumticket_StatusFilter>;
  notIn?: InputMaybe<Array<Ticket_Status>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Invoice_ItemsAvgAggregate = {
  __typename?: 'Invoice_itemsAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  invoice_id?: Maybe<Scalars['Float']['output']>;
  item_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type Invoice_ItemsCountAggregate = {
  __typename?: 'Invoice_itemsCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  invoice_id: Scalars['Int']['output'];
  item_id: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  unit_price: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type Invoice_ItemsListRelationFilter = {
  every?: InputMaybe<Invoice_ItemsWhereInput>;
  none?: InputMaybe<Invoice_ItemsWhereInput>;
  some?: InputMaybe<Invoice_ItemsWhereInput>;
};

export type Invoice_ItemsMaxAggregate = {
  __typename?: 'Invoice_itemsMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  invoice_id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Invoice_ItemsMinAggregate = {
  __typename?: 'Invoice_itemsMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  invoice_id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Invoice_ItemsSumAggregate = {
  __typename?: 'Invoice_itemsSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  invoice_id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type Invoices = {
  __typename?: 'Invoices';
  _count: InvoicesCount;
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  invoice_date: Scalars['DateTime']['output'];
  invoice_items?: Maybe<Array<Invoice_Items>>;
  number: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type InvoicesInvoice_ItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Invoice_ItemsOrderByRelationAggregateInput>;
  where?: InputMaybe<Invoice_ItemsWhereInput>;
};

export type InvoicesAvgAggregate = {
  __typename?: 'InvoicesAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type InvoicesCount = {
  __typename?: 'InvoicesCount';
  invoice_items: Scalars['Int']['output'];
};

export type InvoicesCountAggregate = {
  __typename?: 'InvoicesCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  invoice_date: Scalars['Int']['output'];
  number: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type InvoicesCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_date: Scalars['DateTime']['input'];
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutInvoiceInput>;
  number: Scalars['String']['input'];
  total: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoicesCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_date: Scalars['DateTime']['input'];
  number: Scalars['String']['input'];
  total: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoicesCreateManyBlockInputEnvelope = {
  data: Array<InvoicesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InvoicesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoicesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<InvoicesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<InvoicesCreateManyBlockInputEnvelope>;
};

export type InvoicesCreateNestedOneWithoutInvoice_ItemsInput = {
  connect?: InputMaybe<InvoicesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InvoicesCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<InvoicesCreateWithoutInvoice_ItemsInput>;
};

export type InvoicesCreateOrConnectWithoutBlockInput = {
  create: InvoicesCreateWithoutBlockInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesCreateOrConnectWithoutInvoice_ItemsInput = {
  create: InvoicesCreateWithoutInvoice_ItemsInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_date: Scalars['DateTime']['input'];
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutInvoiceInput>;
  number: Scalars['String']['input'];
  total: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoicesCreateWithoutInvoice_ItemsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_date: Scalars['DateTime']['input'];
  number: Scalars['String']['input'];
  total: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvoicesListRelationFilter = {
  every?: InputMaybe<InvoicesWhereInput>;
  none?: InputMaybe<InvoicesWhereInput>;
  some?: InputMaybe<InvoicesWhereInput>;
};

export type InvoicesMaxAggregate = {
  __typename?: 'InvoicesMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  invoice_date?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoicesMinAggregate = {
  __typename?: 'InvoicesMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  invoice_date?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export enum InvoicesOrderByRelevanceFieldEnum {
  Number = 'number'
}

export type InvoicesOrderByRelevanceInput = {
  fields: Array<InvoicesOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type InvoicesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<InvoicesOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invoice_date?: InputMaybe<SortOrder>;
  invoice_items?: InputMaybe<Invoice_ItemsOrderByRelationAggregateInput>;
  number?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type InvoicesRelationFilter = {
  is?: InputMaybe<InvoicesWhereInput>;
  isNot?: InputMaybe<InvoicesWhereInput>;
};

export type InvoicesScalarWhereInput = {
  AND?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  NOT?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  OR?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_date?: InputMaybe<DateTimeFilter>;
  number?: InputMaybe<StringFilter>;
  total?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type InvoicesSumAggregate = {
  __typename?: 'InvoicesSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type InvoicesUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutInvoiceNestedInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpdateManyWithWhereWithoutBlockInput = {
  data: InvoicesUpdateManyMutationInput;
  where: InvoicesScalarWhereInput;
};

export type InvoicesUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoicesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<InvoicesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<InvoicesCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  set?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  update?: InputMaybe<Array<InvoicesUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<InvoicesUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<InvoicesUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type InvoicesUpdateOneRequiredWithoutInvoice_ItemsNestedInput = {
  connect?: InputMaybe<InvoicesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InvoicesCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<InvoicesCreateWithoutInvoice_ItemsInput>;
  update?: InputMaybe<InvoicesUpdateWithoutInvoice_ItemsInput>;
  upsert?: InputMaybe<InvoicesUpsertWithoutInvoice_ItemsInput>;
};

export type InvoicesUpdateWithWhereUniqueWithoutBlockInput = {
  data: InvoicesUpdateWithoutBlockInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutInvoiceNestedInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpdateWithoutInvoice_ItemsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpsertWithWhereUniqueWithoutBlockInput = {
  create: InvoicesCreateWithoutBlockInput;
  update: InvoicesUpdateWithoutBlockInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesUpsertWithoutInvoice_ItemsInput = {
  create: InvoicesCreateWithoutInvoice_ItemsInput;
  update: InvoicesUpdateWithoutInvoice_ItemsInput;
};

export type InvoicesWhereInput = {
  AND?: InputMaybe<Array<InvoicesWhereInput>>;
  NOT?: InputMaybe<Array<InvoicesWhereInput>>;
  OR?: InputMaybe<Array<InvoicesWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_date?: InputMaybe<DateTimeFilter>;
  invoice_items?: InputMaybe<Invoice_ItemsListRelationFilter>;
  number?: InputMaybe<StringFilter>;
  total?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type InvoicesWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ItemCatagory = {
  __typename?: 'ItemCatagory';
  _count: CatagoryCount;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Items>>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type ItemCatagoryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemsOrderByWithAggregationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};

export type ItemCatagoryAvgAggregate = {
  __typename?: 'ItemCatagoryAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ItemCatagoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ItemCatagoryCount = {
  __typename?: 'ItemCatagoryCount';
  items: Scalars['Int']['output'];
};

export type ItemCatagoryCountAggregate = {
  __typename?: 'ItemCatagoryCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type ItemCatagoryCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<ItemsCreateNestedManyWithoutItemCatagoryInput>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemCatagoryMaxAggregate = {
  __typename?: 'ItemCatagoryMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ItemCatagoryMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryMinAggregate = {
  __typename?: 'ItemCatagoryMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ItemCatagoryMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<ItemCatagoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<ItemCatagoryCountOrderByAggregateInput>;
  _max?: InputMaybe<ItemCatagoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<ItemCatagoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<ItemCatagorySumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagorySumAggregate = {
  __typename?: 'ItemCatagorySumAggregate';
  id?: Maybe<Scalars['String']['output']>;
};

export type ItemCatagorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ItemCatagoryUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateManyWithoutItemCatagoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemCatagoryWhereInput = {
  AND?: InputMaybe<Array<ItemCatagoryWhereInput>>;
  NOT?: InputMaybe<Array<ItemCatagoryWhereInput>>;
  OR?: InputMaybe<Array<ItemCatagoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  items?: InputMaybe<ItemsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Items = {
  __typename?: 'Items';
  _count: ItemsCount;
  block: Block;
  block_id: Scalars['BigInt']['output'];
  catagory: Catagory;
  catagory_id: Scalars['BigInt']['output'];
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  invoice_items?: Maybe<Array<Invoice_Items>>;
  name: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  replacements?: Maybe<Array<Replacements>>;
  unit_price: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type ItemsReplacementsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};

export type ItemsAvgAggregate = {
  __typename?: 'ItemsAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  catagory_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type ItemsAvgOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
};

export type ItemsCount = {
  __typename?: 'ItemsCount';
  invoice_items: Scalars['Int']['output'];
  replacements: Scalars['Int']['output'];
};

export type ItemsCountAggregate = {
  __typename?: 'ItemsCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  catagory_id: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  unit_price: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type ItemsCountOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsCreateInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateManyBlockInput = {
  catagory_id: Scalars['BigInt']['input'];
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateManyBlockInputEnvelope = {
  data: Array<ItemsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemsCreateManyCatagoryInput = {
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateManyCatagoryInputEnvelope = {
  data: Array<ItemsCreateManyCatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemsCreateManyItemCatagoryInput = {
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateManyItemCatagoryInputEnvelope = {
  data: Array<ItemsCreateManyItemCatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ItemsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ItemsCreateManyBlockInputEnvelope>;
};

export type ItemsCreateNestedManyWithoutCatagoryInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyCatagoryInputEnvelope>;
};

export type ItemsCreateNestedManyWithoutItemCatagoryInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutItemCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutItemCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyItemCatagoryInputEnvelope>;
};

export type ItemsCreateNestedOneWithoutInvoice_ItemsInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<ItemsCreateWithoutInvoice_ItemsInput>;
};

export type ItemsCreateNestedOneWithoutReplacementsInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<ItemsCreateWithoutReplacementsInput>;
};

export type ItemsCreateOrConnectWithoutBlockInput = {
  create: ItemsCreateWithoutBlockInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutCatagoryInput = {
  create: ItemsCreateWithoutCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutInvoice_ItemsInput = {
  create: ItemsCreateWithoutInvoice_ItemsInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutItemCatagoryInput = {
  create: ItemsCreateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutReplacementsInput = {
  create: ItemsCreateWithoutReplacementsInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateWithoutBlockInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateWithoutCatagoryInput = {
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateWithoutInvoice_ItemsInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateWithoutItemCatagoryInput = {
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  replacements_scheduled?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsCreateWithoutReplacementsInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars['String']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ItemsListRelationFilter = {
  every?: InputMaybe<ItemsWhereInput>;
  none?: InputMaybe<ItemsWhereInput>;
  some?: InputMaybe<ItemsWhereInput>;
};

export type ItemsMaxAggregate = {
  __typename?: 'ItemsMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  catagory_id?: Maybe<Scalars['BigInt']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ItemsMaxOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsMinAggregate = {
  __typename?: 'ItemsMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  catagory_id?: Maybe<Scalars['BigInt']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ItemsMinOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ItemsOrderByWithAggregationInput = {
  _avg?: InputMaybe<ItemsAvgOrderByAggregateInput>;
  _count?: InputMaybe<ItemsCountOrderByAggregateInput>;
  _max?: InputMaybe<ItemsMaxOrderByAggregateInput>;
  _min?: InputMaybe<ItemsMinOrderByAggregateInput>;
  _sum?: InputMaybe<ItemsSumOrderByAggregateInput>;
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsOrderByWithRelationInput = {
  catagory?: InputMaybe<CatagoryOrderByWithRelationInput>;
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  replacements?: InputMaybe<ReplacementsOrderByRelationAggregateInput>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsRelationFilter = {
  is?: InputMaybe<ItemsWhereInput>;
  isNot?: InputMaybe<ItemsWhereInput>;
};

export type ItemsScalarWhereInput = {
  AND?: InputMaybe<Array<ItemsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ItemsScalarWhereInput>>;
  OR?: InputMaybe<Array<ItemsScalarWhereInput>>;
  catagory_id?: InputMaybe<BigIntFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<FloatFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ItemsSumAggregate = {
  __typename?: 'ItemsSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  catagory_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

export type ItemsSumOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
};

export type ItemsUpdateInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateManyWithWhereWithoutBlockInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithWhereWithoutCatagoryInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithWhereWithoutItemCatagoryInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ItemsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<ItemsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<ItemsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type ItemsUpdateManyWithoutCatagoryNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyCatagoryInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemsUpdateWithWhereUniqueWithoutCatagoryInput>>;
  updateMany?: InputMaybe<Array<ItemsUpdateManyWithWhereWithoutCatagoryInput>>;
  upsert?: InputMaybe<Array<ItemsUpsertWithWhereUniqueWithoutCatagoryInput>>;
};

export type ItemsUpdateManyWithoutItemCatagoryNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutItemCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutItemCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyItemCatagoryInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput>>;
  updateMany?: InputMaybe<Array<ItemsUpdateManyWithWhereWithoutItemCatagoryInput>>;
  upsert?: InputMaybe<Array<ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput>>;
};

export type ItemsUpdateOneRequiredWithoutInvoice_ItemsNestedInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<ItemsCreateWithoutInvoice_ItemsInput>;
  update?: InputMaybe<ItemsUpdateWithoutInvoice_ItemsInput>;
  upsert?: InputMaybe<ItemsUpsertWithoutInvoice_ItemsInput>;
};

export type ItemsUpdateOneRequiredWithoutReplacementsNestedInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<ItemsCreateWithoutReplacementsInput>;
  update?: InputMaybe<ItemsUpdateWithoutReplacementsInput>;
  upsert?: InputMaybe<ItemsUpsertWithoutReplacementsInput>;
};

export type ItemsUpdateWithWhereUniqueWithoutBlockInput = {
  data: ItemsUpdateWithoutBlockInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithWhereUniqueWithoutCatagoryInput = {
  data: ItemsUpdateWithoutCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput = {
  data: ItemsUpdateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithoutBlockInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutCatagoryInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutInvoice_ItemsInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutItemCatagoryInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  replacements_scheduled?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutReplacementsInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpsertWithWhereUniqueWithoutBlockInput = {
  create: ItemsCreateWithoutBlockInput;
  update: ItemsUpdateWithoutBlockInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithWhereUniqueWithoutCatagoryInput = {
  create: ItemsCreateWithoutCatagoryInput;
  update: ItemsUpdateWithoutCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput = {
  create: ItemsCreateWithoutItemCatagoryInput;
  update: ItemsUpdateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithoutInvoice_ItemsInput = {
  create: ItemsCreateWithoutInvoice_ItemsInput;
  update: ItemsUpdateWithoutInvoice_ItemsInput;
};

export type ItemsUpsertWithoutReplacementsInput = {
  create: ItemsCreateWithoutReplacementsInput;
  update: ItemsUpdateWithoutReplacementsInput;
};

export type ItemsWhereInput = {
  AND?: InputMaybe<Array<ItemsWhereInput>>;
  NOT?: InputMaybe<Array<ItemsWhereInput>>;
  OR?: InputMaybe<Array<ItemsWhereInput>>;
  catagory?: InputMaybe<CatagoryRelationFilter>;
  catagory_id?: InputMaybe<BigIntFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_items?: InputMaybe<Invoice_ItemsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<FloatFilter>;
  replacements?: InputMaybe<ReplacementsListRelationFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ItemsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Machine_CatagoryAvgAggregate = {
  __typename?: 'Machine_catagoryAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Machine_CatagoryCount = {
  __typename?: 'Machine_catagoryCount';
  machines: Scalars['Int']['output'];
};

export type Machine_CatagoryCountAggregate = {
  __typename?: 'Machine_catagoryCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type Machine_CatagoryListRelationFilter = {
  every?: InputMaybe<Machine_CatagoryWhereInput>;
  none?: InputMaybe<Machine_CatagoryWhereInput>;
  some?: InputMaybe<Machine_CatagoryWhereInput>;
};

export type Machine_CatagoryMaxAggregate = {
  __typename?: 'Machine_catagoryMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Machine_CatagoryMinAggregate = {
  __typename?: 'Machine_catagoryMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Machine_CatagoryRelationFilter = {
  is?: InputMaybe<Machine_CatagoryWhereInput>;
  isNot?: InputMaybe<Machine_CatagoryWhereInput>;
};

export type Machine_CatagorySumAggregate = {
  __typename?: 'Machine_catagorySumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
};

export type Machines = {
  __typename?: 'Machines';
  Ticket?: Maybe<Array<Ticket>>;
  _count: MachinesCount;
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  label: Scalars['String']['output'];
  machine_catagory: Machine_Catagory;
  machine_catagory_id: Scalars['BigInt']['output'];
  maintenance?: Maybe<Array<Maintenance>>;
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  profile: Scalars['JSON']['output'];
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  section: Sections;
  section_id: Scalars['BigInt']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type MachinesMaintenanceArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};

export type MachinesAvgAggregate = {
  __typename?: 'MachinesAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  machine_catagory_id?: Maybe<Scalars['Float']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  section_id?: Maybe<Scalars['Float']['output']>;
};

export type MachinesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
};

export type MachinesCount = {
  __typename?: 'MachinesCount';
  Ticket: Scalars['Int']['output'];
  maintenance: Scalars['Int']['output'];
  routine_maintanances: Scalars['Int']['output'];
};

export type MachinesCountAggregate = {
  __typename?: 'MachinesCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  label: Scalars['Int']['output'];
  machine_catagory_id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  priority: Scalars['Int']['output'];
  profile: Scalars['Int']['output'];
  section_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type MachinesCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesCreateInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory_id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  section_id: Scalars['BigInt']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateManyBlockInputEnvelope = {
  data: Array<MachinesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MachinesCreateManyMachine_CatagoryInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  section_id: Scalars['BigInt']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateManyMachine_CatagoryInputEnvelope = {
  data: Array<MachinesCreateManyMachine_CatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MachinesCreateManySectionInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory_id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateManySectionInputEnvelope = {
  data: Array<MachinesCreateManySectionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MachinesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MachinesCreateManyBlockInputEnvelope>;
};

export type MachinesCreateNestedManyWithoutMachine_CatagoryInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutMachine_CatagoryInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutMachine_CatagoryInput>>;
  createMany?: InputMaybe<MachinesCreateManyMachine_CatagoryInputEnvelope>;
};

export type MachinesCreateNestedManyWithoutSectionInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutSectionInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutSectionInput>>;
  createMany?: InputMaybe<MachinesCreateManySectionInputEnvelope>;
};

export type MachinesCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<MachinesCreateWithoutMaintenanceInput>;
};

export type MachinesCreateNestedOneWithoutRoutine_MaintanancesInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<MachinesCreateWithoutRoutine_MaintanancesInput>;
};

export type MachinesCreateNestedOneWithoutTicketInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MachinesCreateWithoutTicketInput>;
};

export type MachinesCreateOrConnectWithoutBlockInput = {
  create: MachinesCreateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutMachine_CatagoryInput = {
  create: MachinesCreateWithoutMachine_CatagoryInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutMaintenanceInput = {
  create: MachinesCreateWithoutMaintenanceInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutRoutine_MaintanancesInput = {
  create: MachinesCreateWithoutRoutine_MaintanancesInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutSectionInput = {
  create: MachinesCreateWithoutSectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutTicketInput = {
  create: MachinesCreateWithoutTicketInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateWithoutBlockInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateWithoutMachine_CatagoryInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateWithoutMaintenanceInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateWithoutRoutine_MaintanancesInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateWithoutSectionInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesCreateWithoutTicketInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  label: Scalars['String']['input'];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MachinesListRelationFilter = {
  every?: InputMaybe<MachinesWhereInput>;
  none?: InputMaybe<MachinesWhereInput>;
  some?: InputMaybe<MachinesWhereInput>;
};

export type MachinesMaxAggregate = {
  __typename?: 'MachinesMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  machine_catagory_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  section_id?: Maybe<Scalars['BigInt']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type MachinesMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesMinAggregate = {
  __typename?: 'MachinesMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  machine_catagory_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  section_id?: Maybe<Scalars['BigInt']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type MachinesMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MachinesOrderByWithAggregationInput = {
  _avg?: InputMaybe<MachinesAvgOrderByAggregateInput>;
  _count?: InputMaybe<MachinesCountOrderByAggregateInput>;
  _max?: InputMaybe<MachinesMaxOrderByAggregateInput>;
  _min?: InputMaybe<MachinesMinOrderByAggregateInput>;
  _sum?: InputMaybe<MachinesSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesOrderByWithRelationInput = {
  Ticket?: InputMaybe<TicketOrderByRelationAggregateInput>;
  block?: InputMaybe<BlockOrderByWithRelationInput>;
  block_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section?: InputMaybe<SectionsOrderByWithRelationInput>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesRelationFilter = {
  is?: InputMaybe<MachinesWhereInput>;
  isNot?: InputMaybe<MachinesWhereInput>;
};

export type MachinesScalarWhereInput = {
  AND?: InputMaybe<Array<MachinesScalarWhereInput>>;
  NOT?: InputMaybe<Array<MachinesScalarWhereInput>>;
  OR?: InputMaybe<Array<MachinesScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<StringFilter>;
  machine_catagory_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  profile?: InputMaybe<JsonFilter>;
  section_id?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MachinesSumAggregate = {
  __typename?: 'MachinesSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_catagory_id?: Maybe<Scalars['BigInt']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  section_id?: Maybe<Scalars['BigInt']['output']>;
};

export type MachinesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
};

export type MachinesUpdateInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateManyWithWhereWithoutBlockInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithWhereWithoutMachine_CatagoryInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithWhereWithoutSectionInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MachinesCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<Array<MachinesUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<MachinesUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<MachinesUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type MachinesUpdateManyWithoutMachine_CatagoryNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutMachine_CatagoryInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutMachine_CatagoryInput>>;
  createMany?: InputMaybe<MachinesCreateManyMachine_CatagoryInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<Array<MachinesUpdateWithWhereUniqueWithoutMachine_CatagoryInput>>;
  updateMany?: InputMaybe<Array<MachinesUpdateManyWithWhereWithoutMachine_CatagoryInput>>;
  upsert?: InputMaybe<Array<MachinesUpsertWithWhereUniqueWithoutMachine_CatagoryInput>>;
};

export type MachinesUpdateManyWithoutSectionNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutSectionInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutSectionInput>>;
  createMany?: InputMaybe<MachinesCreateManySectionInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<Array<MachinesUpdateWithWhereUniqueWithoutSectionInput>>;
  updateMany?: InputMaybe<Array<MachinesUpdateManyWithWhereWithoutSectionInput>>;
  upsert?: InputMaybe<Array<MachinesUpsertWithWhereUniqueWithoutSectionInput>>;
};

export type MachinesUpdateOneRequiredWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<MachinesCreateWithoutMaintenanceInput>;
  update?: InputMaybe<MachinesUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<MachinesUpsertWithoutMaintenanceInput>;
};

export type MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<MachinesCreateWithoutRoutine_MaintanancesInput>;
  update?: InputMaybe<MachinesUpdateWithoutRoutine_MaintanancesInput>;
  upsert?: InputMaybe<MachinesUpsertWithoutRoutine_MaintanancesInput>;
};

export type MachinesUpdateOneRequiredWithoutTicketNestedInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MachinesCreateWithoutTicketInput>;
  update?: InputMaybe<MachinesUpdateWithoutTicketInput>;
  upsert?: InputMaybe<MachinesUpsertWithoutTicketInput>;
};

export type MachinesUpdateWithWhereUniqueWithoutBlockInput = {
  data: MachinesUpdateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithWhereUniqueWithoutMachine_CatagoryInput = {
  data: MachinesUpdateWithoutMachine_CatagoryInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithWhereUniqueWithoutSectionInput = {
  data: MachinesUpdateWithoutSectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithoutBlockInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutMachine_CatagoryInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutMaintenanceInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutRoutine_MaintanancesInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutSectionInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutTicketInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpsertWithWhereUniqueWithoutBlockInput = {
  create: MachinesCreateWithoutBlockInput;
  update: MachinesUpdateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithWhereUniqueWithoutMachine_CatagoryInput = {
  create: MachinesCreateWithoutMachine_CatagoryInput;
  update: MachinesUpdateWithoutMachine_CatagoryInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithWhereUniqueWithoutSectionInput = {
  create: MachinesCreateWithoutSectionInput;
  update: MachinesUpdateWithoutSectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithoutMaintenanceInput = {
  create: MachinesCreateWithoutMaintenanceInput;
  update: MachinesUpdateWithoutMaintenanceInput;
};

export type MachinesUpsertWithoutRoutine_MaintanancesInput = {
  create: MachinesCreateWithoutRoutine_MaintanancesInput;
  update: MachinesUpdateWithoutRoutine_MaintanancesInput;
};

export type MachinesUpsertWithoutTicketInput = {
  create: MachinesCreateWithoutTicketInput;
  update: MachinesUpdateWithoutTicketInput;
};

export type MachinesWhereInput = {
  AND?: InputMaybe<Array<MachinesWhereInput>>;
  NOT?: InputMaybe<Array<MachinesWhereInput>>;
  OR?: InputMaybe<Array<MachinesWhereInput>>;
  Ticket?: InputMaybe<TicketListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<StringFilter>;
  machine_catagory?: InputMaybe<Machine_CatagoryRelationFilter>;
  machine_catagory_id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  profile?: InputMaybe<JsonFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  section?: InputMaybe<SectionsRelationFilter>;
  section_id?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MachinesWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Machines_ItemsAvgAggregate = {
  __typename?: 'Machines_itemsAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  item_id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
};

export type Machines_ItemsCountAggregate = {
  __typename?: 'Machines_itemsCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  item_id: Scalars['Int']['output'];
  machine_id: Scalars['Int']['output'];
};

export type Machines_ItemsMaxAggregate = {
  __typename?: 'Machines_itemsMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
};

export type Machines_ItemsMinAggregate = {
  __typename?: 'Machines_itemsMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
};

export type Machines_ItemsSumAggregate = {
  __typename?: 'Machines_itemsSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
};

export type Maintenance = {
  __typename?: 'Maintenance';
  _count: MaintenanceCount;
  assigned?: Maybe<Scalars['Boolean']['output']>;
  assignee: Users;
  assignee_id: Scalars['BigInt']['output'];
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  elapsed?: Maybe<Scalars['DateTime']['output']>;
  from: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  machine: Machines;
  machine_id: Scalars['BigInt']['output'];
  machines: Machines;
  metadata: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  other_cost?: Maybe<Scalars['Float']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  replacements?: Maybe<Array<Replacements>>;
  reports?: Maybe<Array<Reports>>;
  resolved: Scalars['Boolean']['output'];
  service_cost?: Maybe<Scalars['Float']['output']>;
  ticket?: Maybe<Ticket>;
  to: Scalars['DateTime']['output'];
  un_planned: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type MaintenanceAvgAggregate = {
  __typename?: 'MaintenanceAvgAggregate';
  assignee_id?: Maybe<Scalars['Float']['output']>;
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
};

export type MaintenanceCount = {
  __typename?: 'MaintenanceCount';
  replacements: Scalars['Int']['output'];
  reports: Scalars['Int']['output'];
};

export type MaintenanceCountAggregate = {
  __typename?: 'MaintenanceCountAggregate';
  _all: Scalars['Int']['output'];
  assignee_id: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  elapsed: Scalars['Int']['output'];
  from: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  machine_id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  photo: Scalars['Int']['output'];
  resolved: Scalars['Int']['output'];
  to: Scalars['Int']['output'];
  un_planned: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type MaintenanceCreateInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  other_cost?: InputMaybe<Scalars['Float']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  service_cost?: InputMaybe<Scalars['Float']['input']>;
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateManyAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machine_id: Scalars['BigInt']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  resolved: Scalars['Boolean']['input'];
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateManyAssigneeInputEnvelope = {
  data: Array<MaintenanceCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MaintenanceCreateManyBlockInput = {
  assignee_id: Scalars['BigInt']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machine_id: Scalars['BigInt']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  resolved: Scalars['Boolean']['input'];
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateManyBlockInputEnvelope = {
  data: Array<MaintenanceCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MaintenanceCreateManyMachinesInput = {
  assignee_id: Scalars['BigInt']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  resolved: Scalars['Boolean']['input'];
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateManyMachinesInputEnvelope = {
  data: Array<MaintenanceCreateManyMachinesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MaintenanceCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyAssigneeInputEnvelope>;
};

export type MaintenanceCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyBlockInputEnvelope>;
};

export type MaintenanceCreateNestedManyWithoutMachinesInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyMachinesInputEnvelope>;
};

export type MaintenanceCreateNestedOneWithoutReplacementsInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReplacementsInput>;
};

export type MaintenanceCreateNestedOneWithoutReportsInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReportsInput>;
};

export type MaintenanceCreateNestedOneWithoutTicketInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MaintenanceCreateWithoutTicketInput>;
};

export type MaintenanceCreateOrConnectWithoutAssigneeInput = {
  create: MaintenanceCreateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutBlockInput = {
  create: MaintenanceCreateWithoutBlockInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutMachinesInput = {
  create: MaintenanceCreateWithoutMachinesInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutReplacementsInput = {
  create: MaintenanceCreateWithoutReplacementsInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutReportsInput = {
  create: MaintenanceCreateWithoutReportsInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutTicketInput = {
  create: MaintenanceCreateWithoutTicketInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateWithoutAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateWithoutBlockInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateWithoutMachinesInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateWithoutReplacementsInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateWithoutReportsInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceCreateWithoutTicketInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  elapsed?: InputMaybe<Scalars['DateTime']['input']>;
  from: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean']['input'];
  to: Scalars['DateTime']['input'];
  un_planned: Scalars['Boolean']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MaintenanceListRelationFilter = {
  every?: InputMaybe<MaintenanceWhereInput>;
  none?: InputMaybe<MaintenanceWhereInput>;
  some?: InputMaybe<MaintenanceWhereInput>;
};

export type MaintenanceMaxAggregate = {
  __typename?: 'MaintenanceMaxAggregate';
  assignee_id?: Maybe<Scalars['BigInt']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  elapsed?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  to?: Maybe<Scalars['DateTime']['output']>;
  un_planned?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type MaintenanceMinAggregate = {
  __typename?: 'MaintenanceMinAggregate';
  assignee_id?: Maybe<Scalars['BigInt']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  elapsed?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  to?: Maybe<Scalars['DateTime']['output']>;
  un_planned?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type MaintenanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MaintenanceOrderByWithRelationInput = {
  assignee?: InputMaybe<UsersOrderByWithRelationInput>;
  assignee_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  elapsed?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machine_id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByWithRelationInput>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  replacements?: InputMaybe<ReplacementsOrderByRelationAggregateInput>;
  reports?: InputMaybe<ReportsOrderByRelationAggregateInput>;
  resolved?: InputMaybe<SortOrder>;
  ticket?: InputMaybe<TicketOrderByWithRelationInput>;
  to?: InputMaybe<SortOrder>;
  un_planned?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MaintenanceRelationFilter = {
  is?: InputMaybe<MaintenanceWhereInput>;
  isNot?: InputMaybe<MaintenanceWhereInput>;
};

export type MaintenanceScalarWhereInput = {
  AND?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  NOT?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  OR?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  elapsed?: InputMaybe<DateTimeNullableFilter>;
  from?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  resolved?: InputMaybe<BoolFilter>;
  to?: InputMaybe<DateTimeFilter>;
  un_planned?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MaintenanceSumAggregate = {
  __typename?: 'MaintenanceSumAggregate';
  assignee_id?: Maybe<Scalars['BigInt']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
};

export type MaintenanceUpdateInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  other_cost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  service_cost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateManyWithWhereWithoutAssigneeInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithWhereWithoutBlockInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithWhereWithoutMachinesInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<Array<MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<MaintenanceUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type MaintenanceUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<Array<MaintenanceUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<MaintenanceUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<MaintenanceUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type MaintenanceUpdateManyWithoutMachinesNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyMachinesInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<Array<MaintenanceUpdateWithWhereUniqueWithoutMachinesInput>>;
  updateMany?: InputMaybe<Array<MaintenanceUpdateManyWithWhereWithoutMachinesInput>>;
  upsert?: InputMaybe<Array<MaintenanceUpsertWithWhereUniqueWithoutMachinesInput>>;
};

export type MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReplacementsInput>;
  update?: InputMaybe<MaintenanceUpdateWithoutReplacementsInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutReplacementsInput>;
};

export type MaintenanceUpdateOneRequiredWithoutReportsNestedInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReportsInput>;
  update?: InputMaybe<MaintenanceUpdateWithoutReportsInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutReportsInput>;
};

export type MaintenanceUpdateOneWithoutTicketNestedInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MaintenanceCreateWithoutTicketInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<MaintenanceUpdateWithoutTicketInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutTicketInput>;
};

export type MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: MaintenanceUpdateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithWhereUniqueWithoutBlockInput = {
  data: MaintenanceUpdateWithoutBlockInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithWhereUniqueWithoutMachinesInput = {
  data: MaintenanceUpdateWithoutMachinesInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithoutAssigneeInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutBlockInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutMachinesInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutReplacementsInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutReportsInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutTicketInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: MaintenanceCreateWithoutAssigneeInput;
  update: MaintenanceUpdateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertWithWhereUniqueWithoutBlockInput = {
  create: MaintenanceCreateWithoutBlockInput;
  update: MaintenanceUpdateWithoutBlockInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertWithWhereUniqueWithoutMachinesInput = {
  create: MaintenanceCreateWithoutMachinesInput;
  update: MaintenanceUpdateWithoutMachinesInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertWithoutReplacementsInput = {
  create: MaintenanceCreateWithoutReplacementsInput;
  update: MaintenanceUpdateWithoutReplacementsInput;
};

export type MaintenanceUpsertWithoutReportsInput = {
  create: MaintenanceCreateWithoutReportsInput;
  update: MaintenanceUpdateWithoutReportsInput;
};

export type MaintenanceUpsertWithoutTicketInput = {
  create: MaintenanceCreateWithoutTicketInput;
  update: MaintenanceUpdateWithoutTicketInput;
};

export type MaintenanceWhereInput = {
  AND?: InputMaybe<Array<MaintenanceWhereInput>>;
  NOT?: InputMaybe<Array<MaintenanceWhereInput>>;
  OR?: InputMaybe<Array<MaintenanceWhereInput>>;
  assignee?: InputMaybe<UsersRelationFilter>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  elapsed?: InputMaybe<DateTimeNullableFilter>;
  from?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesRelationFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  replacements?: InputMaybe<ReplacementsListRelationFilter>;
  reports?: InputMaybe<ReportsListRelationFilter>;
  resolved?: InputMaybe<BoolFilter>;
  ticket?: InputMaybe<TicketRelationFilter>;
  to?: InputMaybe<DateTimeFilter>;
  un_planned?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MaintenanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlock: Block;
  createInvoice: Invoices;
  createItem: Items;
  createItemCatagory: ItemCatagory;
  createMachine: Machines;
  createMachineCategory: Machine_Catagory;
  createMaintanance: Maintenance;
  createReplacement: Replacements;
  createReport: Reports;
  createRoutineMaintanance: Routine_Maintanances;
  createSection: Section;
  createTicket: Ticket;
  createUser: Users;
  removeBlock: Block;
  removeInvoices: Invoices;
  removeItem: Items;
  removeItemCatagory: ItemCatagory;
  removeMachine: Machines;
  removeMachineCatagories: Machine_Catagory;
  removeMaintanance: Maintenance;
  removeReplacement: Replacements;
  removeReport: Reports;
  removeRoutineMaintanance: Routine_Maintanances;
  removeSection: Section;
  removeTicket: Ticket;
  removeUser: Users;
  updateBlock: Block;
  updateInvoices: Invoices;
  updateItem: Items;
  updateItemCatagory: ItemCatagory;
  updateMachine: Machines;
  updateMachineCatagories: Machine_Catagory;
  updateMaintanance: Maintenance;
  updateReplacement: Replacements;
  updateReport: Reports;
  updateRoutineMaintanance: Routine_Maintanances;
  updateSection: Section;
  updateTicket: Ticket;
  updateUser: Users;
};


export type MutationCreateBlockArgs = {
  createBlockInput: BlockCreateInput;
};


export type MutationCreateInvoiceArgs = {
  createInvoiceInput: InvoicesCreateInput;
};


export type MutationCreateItemArgs = {
  createItemInput: ItemsCreateInput;
};


export type MutationCreateItemCatagoryArgs = {
  createItemCatagoryInput: ItemCatagoryCreateInput;
};


export type MutationCreateMachineArgs = {
  createMachineInput: MachinesCreateInput;
};


export type MutationCreateMachineCategoryArgs = {
  createCategoryInput: Machine_CatagoryCreateWithoutMachinesInput;
};


export type MutationCreateMaintananceArgs = {
  createMaintananceInput: MaintenanceCreateInput;
};


export type MutationCreateReplacementArgs = {
  createReplacementInput: ReplacementsCreateInput;
};


export type MutationCreateReportArgs = {
  createReportInput: ReportsCreateInput;
};


export type MutationCreateRoutineMaintananceArgs = {
  createRoutineMaintananceInput: Routine_MaintanancesCreateInput;
};


export type MutationCreateSectionArgs = {
  createSectionInput: SectionCreateWithoutMachinesInput;
};


export type MutationCreateTicketArgs = {
  createTicketInput: TicketCreateInput;
};


export type MutationCreateUserArgs = {
  createUserInput: UsersCreateInput;
};


export type MutationRemoveBlockArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveInvoicesArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveItemCatagoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveMachineArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveMachineCatagoriesArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveMaintananceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReplacementArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReportArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRoutineMaintananceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTicketArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateBlockArgs = {
  id: Scalars['Int']['input'];
  updateBlockInput: BlockUpdateInput;
};


export type MutationUpdateInvoicesArgs = {
  id: Scalars['Int']['input'];
  updateInvoiceInput: InvoicesUpdateInput;
};


export type MutationUpdateItemArgs = {
  id: Scalars['Int']['input'];
  updateItemInput: ItemsUpdateInput;
};


export type MutationUpdateItemCatagoryArgs = {
  id: Scalars['Int']['input'];
  updateItemCatagoryInput: ItemCatagoryUpdateInput;
};


export type MutationUpdateMachineArgs = {
  id: Scalars['Int']['input'];
  updateMachineInput: MachinesUpdateInput;
};


export type MutationUpdateMachineCatagoriesArgs = {
  data: Machine_CatagoryUpdateOneWithoutMachinesNestedInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateMaintananceArgs = {
  id: Scalars['Int']['input'];
  updateMaintananceInput: MaintenanceUpdateInput;
};


export type MutationUpdateReplacementArgs = {
  id: Scalars['Int']['input'];
  updateReplacementInput: ReplacementsUpdateInput;
};


export type MutationUpdateReportArgs = {
  id: Scalars['Int']['input'];
  updateReportInput: ReportsUpdateInput;
};


export type MutationUpdateRoutineMaintananceArgs = {
  id: Scalars['Int']['input'];
  updateRoutineMaintananceInput: Routine_MaintanancesUpdateInput;
};


export type MutationUpdateSectionArgs = {
  id: Scalars['Int']['input'];
  updateSectionInput: SectionUpdateWithoutMachinesInput;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['Int']['input'];
  updateTicketInput: TicketUpdateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  updateUserInput: UsersUpdateInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumticket_StatusFilter = {
  equals?: InputMaybe<Ticket_Status>;
  in?: InputMaybe<Array<Ticket_Status>>;
  not?: InputMaybe<NestedEnumticket_StatusFilter>;
  notIn?: InputMaybe<Array<Ticket_Status>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Production_DataAvgAggregate = {
  __typename?: 'Production_dataAvgAggregate';
  blockId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  updated_by?: Maybe<Scalars['Float']['output']>;
};

export type Production_DataCountAggregate = {
  __typename?: 'Production_dataCountAggregate';
  _all: Scalars['Int']['output'];
  blockId: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  production: Scalars['Int']['output'];
  shift: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  updated_by: Scalars['Int']['output'];
};

export type Production_DataMaxAggregate = {
  __typename?: 'Production_dataMaxAggregate';
  blockId?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  shift?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<Scalars['BigInt']['output']>;
};

export type Production_DataMinAggregate = {
  __typename?: 'Production_dataMinAggregate';
  blockId?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  shift?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  updated_by?: Maybe<Scalars['BigInt']['output']>;
};

export type Production_DataSumAggregate = {
  __typename?: 'Production_dataSumAggregate';
  blockId?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  updated_by?: Maybe<Scalars['BigInt']['output']>;
};

export type Query = {
  __typename?: 'Query';
  block: Block;
  blocks: Array<Block>;
  blocksCount: Scalars['Int']['output'];
  invoice: Invoices;
  invoiceCount: Scalars['Int']['output'];
  invoices: Array<Invoices>;
  item: Items;
  itemCatagories: Array<ItemCatagory>;
  itemCatagoriesCount: Scalars['Int']['output'];
  itemCatagory: ItemCatagory;
  items: Array<Items>;
  itemsCount: Scalars['Int']['output'];
  machine: Machines;
  machineCatagories: Array<Machine_Catagory>;
  machineCatagoriesCount: Scalars['Int']['output'];
  machineCategory: Machine_Catagory;
  machines: Array<Machines>;
  machinesCount: Scalars['Int']['output'];
  maintenance: Maintenance;
  maintenanceCount: Scalars['Int']['output'];
  maintenances: Array<Maintenance>;
  replacement: Replacements;
  replacements: Array<Replacements>;
  replacementsCount: Scalars['Int']['output'];
  report: Reports;
  routineMaintanance: Routine_Maintanances;
  routineMaintanances: Array<Routine_Maintanances>;
  routineMaintanancesCount: Scalars['Int']['output'];
  section: Section;
  sections: Array<Section>;
  sectionsCount: Scalars['Int']['output'];
  ticket: Ticket;
  tickets: Array<Ticket>;
  ticketsCount: Scalars['Int']['output'];
  user: Users;
  users: Array<Users>;
  usersCount: Scalars['Int']['output'];
};


export type QueryBlockArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBlocksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
};


export type QueryBlocksCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
};


export type QueryInvoiceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryInvoiceCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InvoicesOrderByWithRelationAndSearchRelevanceInput>;
  where?: InputMaybe<InvoicesWhereInput>;
};


export type QueryInvoicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<InvoicesOrderByWithRelationAndSearchRelevanceInput>;
  where?: InputMaybe<InvoicesWhereInput>;
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemCatagoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  where?: InputMaybe<ItemCatagoryWhereInput>;
};


export type QueryItemCatagoriesCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  where?: InputMaybe<ItemCatagoryWhereInput>;
};


export type QueryItemCatagoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};


export type QueryItemsCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};


export type QueryMachineArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMachineCatagoriesArgs = {
  orderBy?: InputMaybe<Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Machine_CatagoryWhereInput>;
};


export type QueryMachineCatagoriesCountArgs = {
  orderBy?: InputMaybe<Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Machine_CatagoryWhereInput>;
};


export type QueryMachineCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMachinesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};


export type QueryMachinesCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};


export type QueryMaintenanceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMaintenanceCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};


export type QueryMaintenancesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};


export type QueryReplacementArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReplacementsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};


export type QueryReplacementsCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};


export type QueryReportArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoutineMaintananceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoutineMaintanancesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
};


export type QueryRoutineMaintanancesCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
};


export type QuerySectionArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySectionsArgs = {
  orderBy?: InputMaybe<SectionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QuerySectionsCountArgs = {
  orderBy?: InputMaybe<SectionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryTicketArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTicketsArgs = {
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QueryTicketsCountArgs = {
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryUsersCountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  where?: InputMaybe<UsersWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Replacements = {
  __typename?: 'Replacements';
  approved: Scalars['Boolean']['output'];
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  item: Items;
  item_id: Scalars['BigInt']['output'];
  items: Items;
  maintanance_id: Scalars['BigInt']['output'];
  maintenance: Maintenance;
  metadata: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type ReplacementsAvgAggregate = {
  __typename?: 'ReplacementsAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  item_id?: Maybe<Scalars['Float']['output']>;
  maintanance_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type ReplacementsCountAggregate = {
  __typename?: 'ReplacementsCountAggregate';
  _all: Scalars['Int']['output'];
  approved: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  item_id: Scalars['Int']['output'];
  maintanance_id: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type ReplacementsCreateInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsCreateManyBlockInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  item_id: Scalars['BigInt']['input'];
  maintanance_id: Scalars['BigInt']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsCreateManyBlockInputEnvelope = {
  data: Array<ReplacementsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReplacementsCreateManyItemsInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintanance_id: Scalars['BigInt']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsCreateManyItemsInputEnvelope = {
  data: Array<ReplacementsCreateManyItemsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReplacementsCreateManyMaintenanceInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  item_id: Scalars['BigInt']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsCreateManyMaintenanceInputEnvelope = {
  data: Array<ReplacementsCreateManyMaintenanceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReplacementsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyBlockInputEnvelope>;
};

export type ReplacementsCreateNestedManyWithoutItemsInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutItemsInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutItemsInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyItemsInputEnvelope>;
};

export type ReplacementsCreateNestedManyWithoutMaintenanceInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyMaintenanceInputEnvelope>;
};

export type ReplacementsCreateOrConnectWithoutBlockInput = {
  create: ReplacementsCreateWithoutBlockInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateOrConnectWithoutItemsInput = {
  create: ReplacementsCreateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateOrConnectWithoutMaintenanceInput = {
  create: ReplacementsCreateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateWithoutBlockInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsCreateWithoutItemsInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsCreateWithoutMaintenanceInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReplacementsListRelationFilter = {
  every?: InputMaybe<ReplacementsWhereInput>;
  none?: InputMaybe<ReplacementsWhereInput>;
  some?: InputMaybe<ReplacementsWhereInput>;
};

export type ReplacementsMaxAggregate = {
  __typename?: 'ReplacementsMaxAggregate';
  approved?: Maybe<Scalars['Boolean']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  maintanance_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ReplacementsMinAggregate = {
  __typename?: 'ReplacementsMinAggregate';
  approved?: Maybe<Scalars['Boolean']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  maintanance_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ReplacementsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReplacementsOrderByWithRelationInput = {
  approved?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  item_id?: InputMaybe<SortOrder>;
  items?: InputMaybe<ItemsOrderByWithRelationInput>;
  maintanance_id?: InputMaybe<SortOrder>;
  maintenance?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ReplacementsScalarWhereInput = {
  AND?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  OR?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  approved?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  maintanance_id?: InputMaybe<BigIntFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ReplacementsSumAggregate = {
  __typename?: 'ReplacementsSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  item_id?: Maybe<Scalars['BigInt']['output']>;
  maintanance_id?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type ReplacementsUpdateInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateManyMutationInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateManyWithWhereWithoutBlockInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithWhereWithoutItemsInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithWhereWithoutMaintenanceInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReplacementsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<ReplacementsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<ReplacementsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type ReplacementsUpdateManyWithoutItemsNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutItemsInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutItemsInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyItemsInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReplacementsUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: InputMaybe<Array<ReplacementsUpdateManyWithWhereWithoutItemsInput>>;
  upsert?: InputMaybe<Array<ReplacementsUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type ReplacementsUpdateManyWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyMaintenanceInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput>>;
  updateMany?: InputMaybe<Array<ReplacementsUpdateManyWithWhereWithoutMaintenanceInput>>;
  upsert?: InputMaybe<Array<ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput>>;
};

export type ReplacementsUpdateWithWhereUniqueWithoutBlockInput = {
  data: ReplacementsUpdateWithoutBlockInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithWhereUniqueWithoutItemsInput = {
  data: ReplacementsUpdateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput = {
  data: ReplacementsUpdateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithoutBlockInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateWithoutItemsInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateWithoutMaintenanceInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpsertWithWhereUniqueWithoutBlockInput = {
  create: ReplacementsCreateWithoutBlockInput;
  update: ReplacementsUpdateWithoutBlockInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpsertWithWhereUniqueWithoutItemsInput = {
  create: ReplacementsCreateWithoutItemsInput;
  update: ReplacementsUpdateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput = {
  create: ReplacementsCreateWithoutMaintenanceInput;
  update: ReplacementsUpdateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsWhereInput = {
  AND?: InputMaybe<Array<ReplacementsWhereInput>>;
  NOT?: InputMaybe<Array<ReplacementsWhereInput>>;
  OR?: InputMaybe<Array<ReplacementsWhereInput>>;
  approved?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  items?: InputMaybe<ItemsRelationFilter>;
  maintanance_id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceRelationFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ReplacementsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Reports = {
  __typename?: 'Reports';
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  maintance_id: Scalars['BigInt']['output'];
  maintenance: Maintenance;
  report: Scalars['String']['output'];
  sign: Scalars['String']['output'];
  tag: Scalars['JSON']['output'];
  updated_at: Scalars['DateTime']['output'];
  validated: Scalars['BigInt']['output'];
  validated_sign: Scalars['BigInt']['output'];
};

export type ReportsAvgAggregate = {
  __typename?: 'ReportsAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  maintance_id?: Maybe<Scalars['Float']['output']>;
  validated?: Maybe<Scalars['Float']['output']>;
  validated_sign?: Maybe<Scalars['Float']['output']>;
};

export type ReportsCountAggregate = {
  __typename?: 'ReportsCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  maintance_id: Scalars['Int']['output'];
  report: Scalars['Int']['output'];
  sign: Scalars['Int']['output'];
  tag: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  validated: Scalars['Int']['output'];
  validated_sign: Scalars['Int']['output'];
};

export type ReportsCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance: MaintenanceCreateNestedOneWithoutReportsInput;
  report: Scalars['String']['input'];
  sign: Scalars['String']['input'];
  tag: Scalars['JSON']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  validated: Scalars['BigInt']['input'];
  validated_sign: Scalars['BigInt']['input'];
};

export type ReportsCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintance_id: Scalars['BigInt']['input'];
  report: Scalars['String']['input'];
  sign: Scalars['String']['input'];
  tag: Scalars['JSON']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  validated: Scalars['BigInt']['input'];
  validated_sign: Scalars['BigInt']['input'];
};

export type ReportsCreateManyBlockInputEnvelope = {
  data: Array<ReportsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReportsCreateManyMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  report: Scalars['String']['input'];
  sign: Scalars['String']['input'];
  tag: Scalars['JSON']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  validated: Scalars['BigInt']['input'];
  validated_sign: Scalars['BigInt']['input'];
};

export type ReportsCreateManyMaintenanceInputEnvelope = {
  data: Array<ReportsCreateManyMaintenanceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReportsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReportsCreateManyBlockInputEnvelope>;
};

export type ReportsCreateNestedManyWithoutMaintenanceInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReportsCreateManyMaintenanceInputEnvelope>;
};

export type ReportsCreateOrConnectWithoutBlockInput = {
  create: ReportsCreateWithoutBlockInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsCreateOrConnectWithoutMaintenanceInput = {
  create: ReportsCreateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance: MaintenanceCreateNestedOneWithoutReportsInput;
  report: Scalars['String']['input'];
  sign: Scalars['String']['input'];
  tag: Scalars['JSON']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  validated: Scalars['BigInt']['input'];
  validated_sign: Scalars['BigInt']['input'];
};

export type ReportsCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  report: Scalars['String']['input'];
  sign: Scalars['String']['input'];
  tag: Scalars['JSON']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  validated: Scalars['BigInt']['input'];
  validated_sign: Scalars['BigInt']['input'];
};

export type ReportsListRelationFilter = {
  every?: InputMaybe<ReportsWhereInput>;
  none?: InputMaybe<ReportsWhereInput>;
  some?: InputMaybe<ReportsWhereInput>;
};

export type ReportsMaxAggregate = {
  __typename?: 'ReportsMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  maintance_id?: Maybe<Scalars['BigInt']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  sign?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  validated?: Maybe<Scalars['BigInt']['output']>;
  validated_sign?: Maybe<Scalars['BigInt']['output']>;
};

export type ReportsMinAggregate = {
  __typename?: 'ReportsMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  maintance_id?: Maybe<Scalars['BigInt']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  sign?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  validated?: Maybe<Scalars['BigInt']['output']>;
  validated_sign?: Maybe<Scalars['BigInt']['output']>;
};

export type ReportsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReportsScalarWhereInput = {
  AND?: InputMaybe<Array<ReportsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReportsScalarWhereInput>>;
  OR?: InputMaybe<Array<ReportsScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintance_id?: InputMaybe<BigIntFilter>;
  report?: InputMaybe<StringFilter>;
  sign?: InputMaybe<StringFilter>;
  tag?: InputMaybe<JsonFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  validated?: InputMaybe<BigIntFilter>;
  validated_sign?: InputMaybe<BigIntFilter>;
};

export type ReportsSumAggregate = {
  __typename?: 'ReportsSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  maintance_id?: Maybe<Scalars['BigInt']['output']>;
  validated?: Maybe<Scalars['BigInt']['output']>;
  validated_sign?: Maybe<Scalars['BigInt']['output']>;
};

export type ReportsUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReportsNestedInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']['input']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']['input']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateManyWithWhereWithoutBlockInput = {
  data: ReportsUpdateManyMutationInput;
  where: ReportsScalarWhereInput;
};

export type ReportsUpdateManyWithWhereWithoutMaintenanceInput = {
  data: ReportsUpdateManyMutationInput;
  where: ReportsScalarWhereInput;
};

export type ReportsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReportsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<ReportsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<ReportsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type ReportsUpdateManyWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReportsCreateManyMaintenanceInputEnvelope>;
  delete?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportsUpdateWithWhereUniqueWithoutMaintenanceInput>>;
  updateMany?: InputMaybe<Array<ReportsUpdateManyWithWhereWithoutMaintenanceInput>>;
  upsert?: InputMaybe<Array<ReportsUpsertWithWhereUniqueWithoutMaintenanceInput>>;
};

export type ReportsUpdateWithWhereUniqueWithoutBlockInput = {
  data: ReportsUpdateWithoutBlockInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsUpdateWithWhereUniqueWithoutMaintenanceInput = {
  data: ReportsUpdateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReportsNestedInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']['input']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']['input']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpsertWithWhereUniqueWithoutBlockInput = {
  create: ReportsCreateWithoutBlockInput;
  update: ReportsUpdateWithoutBlockInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsUpsertWithWhereUniqueWithoutMaintenanceInput = {
  create: ReportsCreateWithoutMaintenanceInput;
  update: ReportsUpdateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsWhereInput = {
  AND?: InputMaybe<Array<ReportsWhereInput>>;
  NOT?: InputMaybe<Array<ReportsWhereInput>>;
  OR?: InputMaybe<Array<ReportsWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintance_id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceRelationFilter>;
  report?: InputMaybe<StringFilter>;
  sign?: InputMaybe<StringFilter>;
  tag?: InputMaybe<JsonFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  validated?: InputMaybe<BigIntFilter>;
  validated_sign?: InputMaybe<BigIntFilter>;
};

export type ReportsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum Role {
  Admin = 'ADMIN',
  Engineer = 'ENGINEER',
  Fitter = 'FITTER',
  Guest = 'GUEST',
  InputController = 'INPUT_CONTROLLER',
  Manager = 'MANAGER',
  ProductionController = 'PRODUCTION_CONTROLLER',
  Supervisor = 'SUPERVISOR'
}

export type Routine_MaintanancesAvgAggregate = {
  __typename?: 'Routine_maintanancesAvgAggregate';
  assignee_id?: Maybe<Scalars['Float']['output']>;
  block_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  meachine_id?: Maybe<Scalars['Float']['output']>;
};

export type Routine_MaintanancesCountAggregate = {
  __typename?: 'Routine_maintanancesCountAggregate';
  _all: Scalars['Int']['output'];
  assignee_id: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  cron: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  meachine_id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type Routine_MaintanancesListRelationFilter = {
  every?: InputMaybe<Routine_MaintanancesWhereInput>;
  none?: InputMaybe<Routine_MaintanancesWhereInput>;
  some?: InputMaybe<Routine_MaintanancesWhereInput>;
};

export type Routine_MaintanancesMaxAggregate = {
  __typename?: 'Routine_maintanancesMaxAggregate';
  assignee_id?: Maybe<Scalars['BigInt']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  cron?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  meachine_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Routine_MaintanancesMinAggregate = {
  __typename?: 'Routine_maintanancesMinAggregate';
  assignee_id?: Maybe<Scalars['BigInt']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  cron?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  meachine_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Routine_MaintanancesSumAggregate = {
  __typename?: 'Routine_maintanancesSumAggregate';
  assignee_id?: Maybe<Scalars['BigInt']['output']>;
  block_id?: Maybe<Scalars['BigInt']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  meachine_id?: Maybe<Scalars['BigInt']['output']>;
};

export type Section = {
  __typename?: 'Section';
  _count: SectionCount;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type SectionMachinesArgs = {
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type SectionAvgAggregate = {
  __typename?: 'SectionAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type SectionCount = {
  __typename?: 'SectionCount';
  machines: Scalars['Int']['output'];
};

export type SectionCountAggregate = {
  __typename?: 'SectionCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type SectionCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionMaxAggregate = {
  __typename?: 'SectionMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type SectionMinAggregate = {
  __typename?: 'SectionMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type SectionOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type SectionSumAggregate = {
  __typename?: 'SectionSumAggregate';
  id?: Maybe<Scalars['String']['output']>;
};

export type SectionUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Sections = {
  __typename?: 'Sections';
  _count: SectionsCount;
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type SectionsCount = {
  __typename?: 'SectionsCount';
  machines: Scalars['Int']['output'];
};

export type SectionsCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionsCreateManyBlockInputEnvelope = {
  data: Array<SectionsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SectionsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<SectionsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<SectionsCreateManyBlockInputEnvelope>;
};

export type SectionsCreateNestedOneWithoutMachinesInput = {
  connect?: InputMaybe<SectionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionsCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<SectionsCreateWithoutMachinesInput>;
};

export type SectionsCreateOrConnectWithoutBlockInput = {
  create: SectionsCreateWithoutBlockInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsCreateOrConnectWithoutMachinesInput = {
  create: SectionsCreateWithoutMachinesInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutSectionInput>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionsCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionsListRelationFilter = {
  every?: InputMaybe<SectionsWhereInput>;
  none?: InputMaybe<SectionsWhereInput>;
  some?: InputMaybe<SectionsWhereInput>;
};

export type SectionsOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type SectionsRelationFilter = {
  is?: InputMaybe<SectionsWhereInput>;
  isNot?: InputMaybe<SectionsWhereInput>;
};

export type SectionsScalarWhereInput = {
  AND?: InputMaybe<Array<SectionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<SectionsScalarWhereInput>>;
  OR?: InputMaybe<Array<SectionsScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SectionsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpdateManyWithWhereWithoutBlockInput = {
  data: SectionsUpdateManyMutationInput;
  where: SectionsScalarWhereInput;
};

export type SectionsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<SectionsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<SectionsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SectionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  set?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  update?: InputMaybe<Array<SectionsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<SectionsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<SectionsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type SectionsUpdateOneRequiredWithoutMachinesNestedInput = {
  connect?: InputMaybe<SectionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionsCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<SectionsCreateWithoutMachinesInput>;
  update?: InputMaybe<SectionsUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<SectionsUpsertWithoutMachinesInput>;
};

export type SectionsUpdateWithWhereUniqueWithoutBlockInput = {
  data: SectionsUpdateWithoutBlockInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutSectionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpsertWithWhereUniqueWithoutBlockInput = {
  create: SectionsCreateWithoutBlockInput;
  update: SectionsUpdateWithoutBlockInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsUpsertWithoutMachinesInput = {
  create: SectionsCreateWithoutMachinesInput;
  update: SectionsUpdateWithoutMachinesInput;
};

export type SectionsWhereInput = {
  AND?: InputMaybe<Array<SectionsWhereInput>>;
  NOT?: InputMaybe<Array<SectionsWhereInput>>;
  OR?: InputMaybe<Array<SectionsWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SectionsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  machine: Machines;
  machine_id: Scalars['BigInt']['output'];
  machines: Machines;
  maintanance?: Maybe<Maintenance>;
  maintenance?: Maybe<Maintenance>;
  maintenance_id?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
  photos: Scalars['String']['output'];
  status: Ticket_Status;
  updated_at: Scalars['DateTime']['output'];
  user: Users;
  user_id: Scalars['BigInt']['output'];
};

export type TicketAvgAggregate = {
  __typename?: 'TicketAvgAggregate';
  block_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  maintenance_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type TicketCountAggregate = {
  __typename?: 'TicketCountAggregate';
  _all: Scalars['Int']['output'];
  block_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  machine_id: Scalars['Int']['output'];
  maintenance_id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  photos: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type TicketCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machine_id: Scalars['BigInt']['input'];
  maintenance_id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateManyBlockInputEnvelope = {
  data: Array<TicketCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TicketCreateManyMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance_id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateManyMachinesInputEnvelope = {
  data: Array<TicketCreateManyMachinesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TicketCreateManyUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machine_id: Scalars['BigInt']['input'];
  maintenance_id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateManyUserInputEnvelope = {
  data: Array<TicketCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TicketCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutBlockInput>>;
  createMany?: InputMaybe<TicketCreateManyBlockInputEnvelope>;
};

export type TicketCreateNestedManyWithoutMachinesInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<TicketCreateManyMachinesInputEnvelope>;
};

export type TicketCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<TicketCreateManyUserInputEnvelope>;
};

export type TicketCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<TicketWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TicketCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<TicketCreateWithoutMaintenanceInput>;
};

export type TicketCreateOrConnectWithoutBlockInput = {
  create: TicketCreateWithoutBlockInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateOrConnectWithoutMachinesInput = {
  create: TicketCreateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateOrConnectWithoutMaintenanceInput = {
  create: TicketCreateWithoutMaintenanceInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateOrConnectWithoutUserInput = {
  create: TicketCreateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String']['input'];
  photos: Scalars['String']['input'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketMaxAggregate = {
  __typename?: 'TicketMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
  maintenance_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Ticket_Status>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['BigInt']['output']>;
};

export type TicketMinAggregate = {
  __typename?: 'TicketMinAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
  maintenance_id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Ticket_Status>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['BigInt']['output']>;
};

export type TicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TicketOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machine_id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByWithRelationInput>;
  maintenance?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  maintenance_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photos?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TicketRelationFilter = {
  is?: InputMaybe<TicketWhereInput>;
  isNot?: InputMaybe<TicketWhereInput>;
};

export type TicketScalarWhereInput = {
  AND?: InputMaybe<Array<TicketScalarWhereInput>>;
  NOT?: InputMaybe<Array<TicketScalarWhereInput>>;
  OR?: InputMaybe<Array<TicketScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  maintenance_id?: InputMaybe<BigIntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  photos?: InputMaybe<StringFilter>;
  status?: InputMaybe<Enumticket_StatusFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TicketSumAggregate = {
  __typename?: 'TicketSumAggregate';
  block_id?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  machine_id?: Maybe<Scalars['BigInt']['output']>;
  maintenance_id?: Maybe<Scalars['BigInt']['output']>;
  user_id?: Maybe<Scalars['BigInt']['output']>;
};

export type TicketUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyWithWhereWithoutBlockInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithWhereWithoutMachinesInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithWhereWithoutUserInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutBlockInput>>;
  createMany?: InputMaybe<TicketCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type TicketUpdateManyWithoutMachinesNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<TicketCreateManyMachinesInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutMachinesInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutMachinesInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutMachinesInput>>;
};

export type TicketUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<TicketCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TicketUpdateOneWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<TicketWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TicketCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<TicketCreateWithoutMaintenanceInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<TicketUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<TicketUpsertWithoutMaintenanceInput>;
};

export type TicketUpdateWithWhereUniqueWithoutBlockInput = {
  data: TicketUpdateWithoutBlockInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithWhereUniqueWithoutMachinesInput = {
  data: TicketUpdateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithWhereUniqueWithoutUserInput = {
  data: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpsertWithWhereUniqueWithoutBlockInput = {
  create: TicketCreateWithoutBlockInput;
  update: TicketUpdateWithoutBlockInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpsertWithWhereUniqueWithoutMachinesInput = {
  create: TicketCreateWithoutMachinesInput;
  update: TicketUpdateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpsertWithWhereUniqueWithoutUserInput = {
  create: TicketCreateWithoutUserInput;
  update: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpsertWithoutMaintenanceInput = {
  create: TicketCreateWithoutMaintenanceInput;
  update: TicketUpdateWithoutMaintenanceInput;
};

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>;
  NOT?: InputMaybe<Array<TicketWhereInput>>;
  OR?: InputMaybe<Array<TicketWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesRelationFilter>;
  maintenance?: InputMaybe<MaintenanceRelationFilter>;
  maintenance_id?: InputMaybe<BigIntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  photos?: InputMaybe<StringFilter>;
  status?: InputMaybe<Enumticket_StatusFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TicketWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Users = {
  __typename?: 'Users';
  _count: UsersCount;
  block: Block;
  blockId: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  extra_roles?: Maybe<Array<Role>>;
  id: Scalars['BigInt']['output'];
  maintenance?: Maybe<Array<Maintenance>>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  profile: Scalars['JSON']['output'];
  role: Role;
  role_alias: Scalars['String']['output'];
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  ticket?: Maybe<Array<Ticket>>;
  updated_at: Scalars['DateTime']['output'];
};


export type UsersMaintenanceArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};


export type UsersTicketArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  where?: InputMaybe<TicketWhereInput>;
};

export type UsersAvgAggregate = {
  __typename?: 'UsersAvgAggregate';
  blockId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type UsersCount = {
  __typename?: 'UsersCount';
  maintenance: Scalars['Int']['output'];
  routine_maintanances: Scalars['Int']['output'];
  ticket: Scalars['Int']['output'];
};

export type UsersCountAggregate = {
  __typename?: 'UsersCountAggregate';
  _all: Scalars['Int']['output'];
  blockId: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  extra_roles: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  profile: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  role_alias: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type UsersCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role: Role;
  role_alias?: InputMaybe<Scalars['String']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role: Role;
  role_alias?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersCreateManyBlockInputEnvelope = {
  data: Array<UsersCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UsersCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<UsersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<UsersCreateWithoutBlockInput>>;
  createMany?: InputMaybe<UsersCreateManyBlockInputEnvelope>;
};

export type UsersCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<UsersCreateWithoutMaintenanceInput>;
};

export type UsersCreateNestedOneWithoutRoutine_MaintanancesInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<UsersCreateWithoutRoutine_MaintanancesInput>;
};

export type UsersCreateOrConnectWithoutBlockInput = {
  create: UsersCreateWithoutBlockInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutMaintenanceInput = {
  create: UsersCreateWithoutMaintenanceInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutRoutine_MaintanancesInput = {
  create: UsersCreateWithoutRoutine_MaintanancesInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role: Role;
  role_alias?: InputMaybe<Scalars['String']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role: Role;
  role_alias?: InputMaybe<Scalars['String']['input']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersCreateWithoutRoutine_MaintanancesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role: Role;
  role_alias?: InputMaybe<Scalars['String']['input']>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersCreateextra_RolesInput = {
  set: Array<Role>;
};

export type UsersListRelationFilter = {
  every?: InputMaybe<UsersWhereInput>;
  none?: InputMaybe<UsersWhereInput>;
  some?: InputMaybe<UsersWhereInput>;
};

export type UsersMaxAggregate = {
  __typename?: 'UsersMaxAggregate';
  blockId?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  role_alias?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersMinAggregate = {
  __typename?: 'UsersMinAggregate';
  blockId?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  role_alias?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ticket?: InputMaybe<TicketOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  user_auth_id?: InputMaybe<SortOrder>;
};

export type UsersRelationFilter = {
  is?: InputMaybe<UsersWhereInput>;
  isNot?: InputMaybe<UsersWhereInput>;
};

export type UsersScalarWhereInput = {
  AND?: InputMaybe<Array<UsersScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  extra_roles?: InputMaybe<EnumRoleNullableListFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  profile?: InputMaybe<JsonFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  role_alias?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UsersSumAggregate = {
  __typename?: 'UsersSumAggregate';
  blockId?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
};

export type UsersUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateManyWithWhereWithoutBlockInput = {
  data: UsersUpdateManyMutationInput;
  where: UsersScalarWhereInput;
};

export type UsersUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<UsersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<UsersCreateWithoutBlockInput>>;
  createMany?: InputMaybe<UsersCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<UsersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<UsersUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<UsersUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type UsersUpdateOneRequiredWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<UsersCreateWithoutMaintenanceInput>;
  update?: InputMaybe<UsersUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<UsersUpsertWithoutMaintenanceInput>;
};

export type UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<UsersCreateWithoutRoutine_MaintanancesInput>;
  update?: InputMaybe<UsersUpdateWithoutRoutine_MaintanancesInput>;
  upsert?: InputMaybe<UsersUpsertWithoutRoutine_MaintanancesInput>;
};

export type UsersUpdateWithWhereUniqueWithoutBlockInput = {
  data: UsersUpdateWithoutBlockInput;
  where: UsersWhereUniqueInput;
};

export type UsersUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutRoutine_MaintanancesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']['input']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateextra_RolesInput = {
  push?: InputMaybe<Array<Role>>;
  set?: InputMaybe<Array<Role>>;
};

export type UsersUpsertWithWhereUniqueWithoutBlockInput = {
  create: UsersCreateWithoutBlockInput;
  update: UsersUpdateWithoutBlockInput;
  where: UsersWhereUniqueInput;
};

export type UsersUpsertWithoutMaintenanceInput = {
  create: UsersCreateWithoutMaintenanceInput;
  update: UsersUpdateWithoutMaintenanceInput;
};

export type UsersUpsertWithoutRoutine_MaintanancesInput = {
  create: UsersCreateWithoutRoutine_MaintanancesInput;
  update: UsersUpdateWithoutRoutine_MaintanancesInput;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  extra_roles?: InputMaybe<EnumRoleNullableListFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  profile?: InputMaybe<JsonFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  role_alias?: InputMaybe<StringFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  ticket?: InputMaybe<TicketListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UsersWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Block_Settings = {
  __typename?: 'block_settings';
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  value: Scalars['JSON']['output'];
};

export type Block_SettingsBlock_IdNameCompoundUniqueInput = {
  block_id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
};

export type Block_SettingsCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  value: Scalars['JSON']['input'];
};

export type Block_SettingsCreateManyBlockInputEnvelope = {
  data: Array<Block_SettingsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Block_SettingsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Block_SettingsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Block_SettingsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Block_SettingsCreateManyBlockInputEnvelope>;
};

export type Block_SettingsCreateOrConnectWithoutBlockInput = {
  create: Block_SettingsCreateWithoutBlockInput;
  where: Block_SettingsWhereUniqueInput;
};

export type Block_SettingsCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  value: Scalars['JSON']['input'];
};

export type Block_SettingsScalarWhereInput = {
  AND?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  OR?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  block_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type Block_SettingsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type Block_SettingsUpdateManyWithWhereWithoutBlockInput = {
  data: Block_SettingsUpdateManyMutationInput;
  where: Block_SettingsScalarWhereInput;
};

export type Block_SettingsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Block_SettingsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Block_SettingsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Block_SettingsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  set?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  update?: InputMaybe<Array<Block_SettingsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<Block_SettingsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<Block_SettingsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type Block_SettingsUpdateWithWhereUniqueWithoutBlockInput = {
  data: Block_SettingsUpdateWithoutBlockInput;
  where: Block_SettingsWhereUniqueInput;
};

export type Block_SettingsUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type Block_SettingsUpsertWithWhereUniqueWithoutBlockInput = {
  create: Block_SettingsCreateWithoutBlockInput;
  update: Block_SettingsUpdateWithoutBlockInput;
  where: Block_SettingsWhereUniqueInput;
};

export type Block_SettingsWhereInput = {
  AND?: InputMaybe<Array<Block_SettingsWhereInput>>;
  NOT?: InputMaybe<Array<Block_SettingsWhereInput>>;
  OR?: InputMaybe<Array<Block_SettingsWhereInput>>;
  block?: InputMaybe<BlockRelationFilter>;
  block_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type Block_SettingsWhereUniqueInput = {
  block_id_name?: InputMaybe<Block_SettingsBlock_IdNameCompoundUniqueInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Catagory = {
  __typename?: 'catagory';
  _count: CatagoryCount;
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  items?: Maybe<Array<Items>>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type CatagoryCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CatagoryCreateManyBlockInputEnvelope = {
  data: Array<CatagoryCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatagoryCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatagoryCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<CatagoryCreateManyBlockInputEnvelope>;
};

export type CatagoryCreateNestedOneWithoutItemsInput = {
  connect?: InputMaybe<CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatagoryCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<CatagoryCreateWithoutItemsInput>;
};

export type CatagoryCreateOrConnectWithoutBlockInput = {
  create: CatagoryCreateWithoutBlockInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryCreateOrConnectWithoutItemsInput = {
  create: CatagoryCreateWithoutItemsInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  items?: InputMaybe<ItemsCreateNestedManyWithoutCatagoryInput>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CatagoryCreateWithoutItemsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CatagoryOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<ItemsOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CatagoryScalarWhereInput = {
  AND?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CatagoryUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpdateManyWithWhereWithoutBlockInput = {
  data: CatagoryUpdateManyMutationInput;
  where: CatagoryScalarWhereInput;
};

export type CatagoryUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatagoryCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<CatagoryCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CatagoryUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<CatagoryUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<CatagoryUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type CatagoryUpdateOneRequiredWithoutItemsNestedInput = {
  connect?: InputMaybe<CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatagoryCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<CatagoryCreateWithoutItemsInput>;
  update?: InputMaybe<CatagoryUpdateWithoutItemsInput>;
  upsert?: InputMaybe<CatagoryUpsertWithoutItemsInput>;
};

export type CatagoryUpdateWithWhereUniqueWithoutBlockInput = {
  data: CatagoryUpdateWithoutBlockInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateManyWithoutCatagoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpdateWithoutItemsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpsertWithWhereUniqueWithoutBlockInput = {
  create: CatagoryCreateWithoutBlockInput;
  update: CatagoryUpdateWithoutBlockInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryUpsertWithoutItemsInput = {
  create: CatagoryCreateWithoutItemsInput;
  update: CatagoryUpdateWithoutItemsInput;
};

export type CatagoryWhereInput = {
  AND?: InputMaybe<Array<CatagoryWhereInput>>;
  NOT?: InputMaybe<Array<CatagoryWhereInput>>;
  OR?: InputMaybe<Array<CatagoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  items?: InputMaybe<ItemsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CatagoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Invoice_Items = {
  __typename?: 'invoice_items';
  amount: Scalars['Float']['output'];
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  invoice: Invoices;
  invoice_id: Scalars['BigInt']['output'];
  item: Items;
  item_id: Scalars['BigInt']['output'];
  quantity: Scalars['Float']['output'];
  unit_price: Scalars['Float']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Invoice_ItemsCreateManyBlockInput = {
  amount: Scalars['Float']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_id: Scalars['BigInt']['input'];
  item_id: Scalars['BigInt']['input'];
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice_ItemsCreateManyBlockInputEnvelope = {
  data: Array<Invoice_ItemsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Invoice_ItemsCreateManyInvoiceInput = {
  amount: Scalars['Float']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  item_id: Scalars['BigInt']['input'];
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice_ItemsCreateManyInvoiceInputEnvelope = {
  data: Array<Invoice_ItemsCreateManyInvoiceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Invoice_ItemsCreateManyItemInput = {
  amount: Scalars['Float']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice_id: Scalars['BigInt']['input'];
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice_ItemsCreateManyItemInputEnvelope = {
  data: Array<Invoice_ItemsCreateManyItemInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Invoice_ItemsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Invoice_ItemsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyBlockInputEnvelope>;
};

export type Invoice_ItemsCreateNestedManyWithoutInvoiceInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Invoice_ItemsCreateOrConnectWithoutInvoiceInput>>;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutInvoiceInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyInvoiceInputEnvelope>;
};

export type Invoice_ItemsCreateNestedManyWithoutItemInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Invoice_ItemsCreateOrConnectWithoutItemInput>>;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutItemInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyItemInputEnvelope>;
};

export type Invoice_ItemsCreateOrConnectWithoutBlockInput = {
  create: Invoice_ItemsCreateWithoutBlockInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsCreateOrConnectWithoutInvoiceInput = {
  create: Invoice_ItemsCreateWithoutInvoiceInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsCreateOrConnectWithoutItemInput = {
  create: Invoice_ItemsCreateWithoutItemInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsCreateWithoutBlockInput = {
  amount: Scalars['Float']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice: InvoicesCreateNestedOneWithoutInvoice_ItemsInput;
  item: ItemsCreateNestedOneWithoutInvoice_ItemsInput;
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice_ItemsCreateWithoutInvoiceInput = {
  amount: Scalars['Float']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  item: ItemsCreateNestedOneWithoutInvoice_ItemsInput;
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice_ItemsCreateWithoutItemInput = {
  amount: Scalars['Float']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  invoice: InvoicesCreateNestedOneWithoutInvoice_ItemsInput;
  quantity: Scalars['Float']['input'];
  unit_price: Scalars['Float']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Invoice_ItemsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Invoice_ItemsScalarWhereInput = {
  AND?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  OR?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_id?: InputMaybe<BigIntFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Invoice_ItemsUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpdateManyWithWhereWithoutBlockInput = {
  data: Invoice_ItemsUpdateManyMutationInput;
  where: Invoice_ItemsScalarWhereInput;
};

export type Invoice_ItemsUpdateManyWithWhereWithoutInvoiceInput = {
  data: Invoice_ItemsUpdateManyMutationInput;
  where: Invoice_ItemsScalarWhereInput;
};

export type Invoice_ItemsUpdateManyWithWhereWithoutItemInput = {
  data: Invoice_ItemsUpdateManyMutationInput;
  where: Invoice_ItemsScalarWhereInput;
};

export type Invoice_ItemsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Invoice_ItemsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<Invoice_ItemsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<Invoice_ItemsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<Invoice_ItemsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type Invoice_ItemsUpdateManyWithoutInvoiceNestedInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Invoice_ItemsCreateOrConnectWithoutInvoiceInput>>;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutInvoiceInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyInvoiceInputEnvelope>;
  delete?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<Invoice_ItemsUpdateWithWhereUniqueWithoutInvoiceInput>>;
  updateMany?: InputMaybe<Array<Invoice_ItemsUpdateManyWithWhereWithoutInvoiceInput>>;
  upsert?: InputMaybe<Array<Invoice_ItemsUpsertWithWhereUniqueWithoutInvoiceInput>>;
};

export type Invoice_ItemsUpdateManyWithoutItemNestedInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Invoice_ItemsCreateOrConnectWithoutItemInput>>;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutItemInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyItemInputEnvelope>;
  delete?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<Invoice_ItemsUpdateWithWhereUniqueWithoutItemInput>>;
  updateMany?: InputMaybe<Array<Invoice_ItemsUpdateManyWithWhereWithoutItemInput>>;
  upsert?: InputMaybe<Array<Invoice_ItemsUpsertWithWhereUniqueWithoutItemInput>>;
};

export type Invoice_ItemsUpdateWithWhereUniqueWithoutBlockInput = {
  data: Invoice_ItemsUpdateWithoutBlockInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpdateWithWhereUniqueWithoutInvoiceInput = {
  data: Invoice_ItemsUpdateWithoutInvoiceInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpdateWithWhereUniqueWithoutItemInput = {
  data: Invoice_ItemsUpdateWithoutItemInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpdateWithoutBlockInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice?: InputMaybe<InvoicesUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  item?: InputMaybe<ItemsUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpdateWithoutInvoiceInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  item?: InputMaybe<ItemsUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpdateWithoutItemInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice?: InputMaybe<InvoicesUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpsertWithWhereUniqueWithoutBlockInput = {
  create: Invoice_ItemsCreateWithoutBlockInput;
  update: Invoice_ItemsUpdateWithoutBlockInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpsertWithWhereUniqueWithoutInvoiceInput = {
  create: Invoice_ItemsCreateWithoutInvoiceInput;
  update: Invoice_ItemsUpdateWithoutInvoiceInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpsertWithWhereUniqueWithoutItemInput = {
  create: Invoice_ItemsCreateWithoutItemInput;
  update: Invoice_ItemsUpdateWithoutItemInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsWhereInput = {
  AND?: InputMaybe<Array<Invoice_ItemsWhereInput>>;
  NOT?: InputMaybe<Array<Invoice_ItemsWhereInput>>;
  OR?: InputMaybe<Array<Invoice_ItemsWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice?: InputMaybe<InvoicesRelationFilter>;
  invoice_id?: InputMaybe<BigIntFilter>;
  item?: InputMaybe<ItemsRelationFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Invoice_ItemsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Machine_Catagory = {
  __typename?: 'machine_catagory';
  _count: Machine_CatagoryCount;
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type Machine_CatagoryMachinesArgs = {
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type Machine_CatagoryCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Machine_CatagoryCreateManyBlockInputEnvelope = {
  data: Array<Machine_CatagoryCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Machine_CatagoryCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Machine_CatagoryCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Machine_CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Machine_CatagoryCreateManyBlockInputEnvelope>;
};

export type Machine_CatagoryCreateNestedOneWithoutMachinesInput = {
  connect?: InputMaybe<Machine_CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Machine_CatagoryCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<Machine_CatagoryCreateWithoutMachinesInput>;
};

export type Machine_CatagoryCreateOrConnectWithoutBlockInput = {
  create: Machine_CatagoryCreateWithoutBlockInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryCreateOrConnectWithoutMachinesInput = {
  create: Machine_CatagoryCreateWithoutMachinesInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutMachine_CatagoryInput>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Machine_CatagoryCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Machine_CatagoryOrderByRelevanceFieldEnum {
  Name = 'name'
}

export type Machine_CatagoryOrderByRelevanceInput = {
  fields: Array<Machine_CatagoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<Machine_CatagoryOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type Machine_CatagoryScalarWhereInput = {
  AND?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  OR?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Machine_CatagoryUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Machine_CatagoryUpdateManyWithWhereWithoutBlockInput = {
  data: Machine_CatagoryUpdateManyMutationInput;
  where: Machine_CatagoryScalarWhereInput;
};

export type Machine_CatagoryUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Machine_CatagoryCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Machine_CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Machine_CatagoryCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  set?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  update?: InputMaybe<Array<Machine_CatagoryUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<Machine_CatagoryUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<Machine_CatagoryUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput = {
  connect?: InputMaybe<Machine_CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Machine_CatagoryCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<Machine_CatagoryCreateWithoutMachinesInput>;
  update?: InputMaybe<Machine_CatagoryUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<Machine_CatagoryUpsertWithoutMachinesInput>;
};

export type Machine_CatagoryUpdateOneWithoutMachinesNestedInput = {
  connect?: InputMaybe<Machine_CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Machine_CatagoryCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<Machine_CatagoryCreateWithoutMachinesInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Machine_CatagoryUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<Machine_CatagoryUpsertWithoutMachinesInput>;
};

export type Machine_CatagoryUpdateWithWhereUniqueWithoutBlockInput = {
  data: Machine_CatagoryUpdateWithoutBlockInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutMachine_CatagoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Machine_CatagoryUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Machine_CatagoryUpsertWithWhereUniqueWithoutBlockInput = {
  create: Machine_CatagoryCreateWithoutBlockInput;
  update: Machine_CatagoryUpdateWithoutBlockInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryUpsertWithoutMachinesInput = {
  create: Machine_CatagoryCreateWithoutMachinesInput;
  update: Machine_CatagoryUpdateWithoutMachinesInput;
};

export type Machine_CatagoryWhereInput = {
  AND?: InputMaybe<Array<Machine_CatagoryWhereInput>>;
  NOT?: InputMaybe<Array<Machine_CatagoryWhereInput>>;
  OR?: InputMaybe<Array<Machine_CatagoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Machine_CatagoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Routine_Maintanances = {
  __typename?: 'routine_maintanances';
  assignee: Users;
  assignee_id: Scalars['BigInt']['output'];
  block: Block;
  block_id: Scalars['BigInt']['output'];
  created_at: Scalars['DateTime']['output'];
  cron: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  meachine: Machines;
  meachine_id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Routine_MaintanancesCreateInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesCreateManyAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  meachine_id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesCreateManyAssigneeInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Routine_MaintanancesCreateManyBlockInput = {
  assignee_id: Scalars['BigInt']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  meachine_id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesCreateManyBlockInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Routine_MaintanancesCreateManyMeachineInput = {
  assignee_id: Scalars['BigInt']['input'];
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesCreateManyMeachineInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyMeachineInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Routine_MaintanancesCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyAssigneeInputEnvelope>;
};

export type Routine_MaintanancesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyBlockInputEnvelope>;
};

export type Routine_MaintanancesCreateNestedManyWithoutMeachineInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutMeachineInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutMeachineInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyMeachineInputEnvelope>;
};

export type Routine_MaintanancesCreateOrConnectWithoutAssigneeInput = {
  create: Routine_MaintanancesCreateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateOrConnectWithoutBlockInput = {
  create: Routine_MaintanancesCreateWithoutBlockInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateOrConnectWithoutMeachineInput = {
  create: Routine_MaintanancesCreateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateWithoutAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesCreateWithoutBlockInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesCreateWithoutMeachineInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  cron: Scalars['String']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Routine_MaintanancesScalarWhereInput = {
  AND?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  NOT?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  OR?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  cron?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  meachine_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Routine_MaintanancesSumOrderByAggregateInput = {
  assignee_id?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meachine_id?: InputMaybe<SortOrder>;
};

export type Routine_MaintanancesUpdateInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutAssigneeInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutBlockInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutMeachineInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<Routine_MaintanancesUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type Routine_MaintanancesUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<Routine_MaintanancesUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type Routine_MaintanancesUpdateManyWithoutMeachineNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutMeachineInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutMeachineInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyMeachineInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutMeachineInput>>;
  updateMany?: InputMaybe<Array<Routine_MaintanancesUpdateManyWithWhereWithoutMeachineInput>>;
  upsert?: InputMaybe<Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutMeachineInput>>;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: Routine_MaintanancesUpdateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutBlockInput = {
  data: Routine_MaintanancesUpdateWithoutBlockInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutMeachineInput = {
  data: Routine_MaintanancesUpdateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpdateWithoutAssigneeInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateWithoutBlockInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateWithoutMeachineInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: Routine_MaintanancesCreateWithoutAssigneeInput;
  update: Routine_MaintanancesUpdateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutBlockInput = {
  create: Routine_MaintanancesCreateWithoutBlockInput;
  update: Routine_MaintanancesUpdateWithoutBlockInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutMeachineInput = {
  create: Routine_MaintanancesCreateWithoutMeachineInput;
  update: Routine_MaintanancesUpdateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesWhereInput = {
  AND?: InputMaybe<Array<Routine_MaintanancesWhereInput>>;
  NOT?: InputMaybe<Array<Routine_MaintanancesWhereInput>>;
  OR?: InputMaybe<Array<Routine_MaintanancesWhereInput>>;
  assignee?: InputMaybe<UsersRelationFilter>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  cron?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  meachine?: InputMaybe<MachinesRelationFilter>;
  meachine_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Routine_MaintanancesWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum Ticket_Status {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Pending = 'PENDING'
}

export type GetAllMachinesDropdownQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMachinesDropdownQuery = { __typename?: 'Query', machines: Array<{ __typename?: 'Machines', label: string, value: any }> };

export type MaintenanceQueryVariables = Exact<{
  where?: InputMaybe<MaintenanceWhereInput>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MaintenanceQuery = { __typename?: 'Query', maintenances: Array<{ __typename?: 'Maintenance', id: any, from: any, to: any, elapsed?: any | null, description: string, resolved: boolean, name: string, machine_id: any, assignee: { __typename?: 'Users', id: any, name: string } }> };

export type GetMaintananceQueryVariables = Exact<{
  maintenanceId: Scalars['Int']['input'];
}>;


export type GetMaintananceQuery = { __typename?: 'Query', maintenance: { __typename?: 'Maintenance', created_at: any, updated_at: any, description: string, name: string, id: any, from: any, to: any, elapsed?: any | null, resolved: boolean, un_planned: boolean, ticket?: { __typename?: 'Ticket', id: any, name: string, created_at: any } | null, assignee: { __typename?: 'Users', id: any, name: string }, machine: { __typename?: 'Machines', id: any, label: string, priority: number, block: { __typename?: 'Block', id: any, name: string }, section: { __typename?: 'Sections', id: any, name: string } } } };

export type UpdateMaintananceMutationVariables = Exact<{
  updateMaintananceId: Scalars['Int']['input'];
  updateMaintananceInput: MaintenanceUpdateInput;
}>;


export type UpdateMaintananceMutation = { __typename?: 'Mutation', updateMaintanance: { __typename?: 'Maintenance', id: any } };

export type CreateMaintananceMutationVariables = Exact<{
  createMaintananceInput: MaintenanceCreateInput;
}>;


export type CreateMaintananceMutation = { __typename?: 'Mutation', createMaintanance: { __typename?: 'Maintenance', id: any } };

export type ItemsDropDownQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsDropDownQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Items', id: any, name: string, code: string }> };

export type TicketsQueryVariables = Exact<{
  where?: InputMaybe<TicketWhereInput>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
}>;


export type TicketsQuery = { __typename?: 'Query', tickets: Array<{ __typename?: 'Ticket', id: any, description: string, name: string, photos: string, status: Ticket_Status, created_at: any, machine: { __typename?: 'Machines', id: any, name: string, label: string }, user: { __typename?: 'Users', id: any, name: string } }> };

export type CreateTicketsMutationVariables = Exact<{
  createTicketInput: TicketCreateInput;
}>;


export type CreateTicketsMutation = { __typename?: 'Mutation', createTicket: { __typename?: 'Ticket', id: any, description: string, name: string, photos: string, status: Ticket_Status, created_at: any, machine: { __typename?: 'Machines', id: any, name: string, label: string }, user: { __typename?: 'Users', id: any, name: string } } };

export type GetTicketQueryVariables = Exact<{
  ticketId: Scalars['Int']['input'];
}>;


export type GetTicketQuery = { __typename?: 'Query', ticket: { __typename?: 'Ticket', id: any, description: string, name: string, photos: string, status: Ticket_Status, updated_at: any, created_at: any, machine: { __typename?: 'Machines', id: any, label: string, priority: number, block: { __typename?: 'Block', id: any, name: string }, section: { __typename?: 'Sections', id: any, name: string } }, user: { __typename?: 'Users', id: any, name: string } } };

export type UsersDropDownQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersDropDownQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Users', name: string, phone: string, value: any }> };


export const GetAllMachinesDropdownDocument = gql`
    query getAllMachinesDropdown {
  machines {
    value: id
    label
  }
}
    `;

/**
 * __useGetAllMachinesDropdownQuery__
 *
 * To run a query within a React component, call `useGetAllMachinesDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMachinesDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMachinesDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMachinesDropdownQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>(GetAllMachinesDropdownDocument, options);
      }
export function useGetAllMachinesDropdownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>(GetAllMachinesDropdownDocument, options);
        }
export function useGetAllMachinesDropdownSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>(GetAllMachinesDropdownDocument, options);
        }
export type GetAllMachinesDropdownQueryHookResult = ReturnType<typeof useGetAllMachinesDropdownQuery>;
export type GetAllMachinesDropdownLazyQueryHookResult = ReturnType<typeof useGetAllMachinesDropdownLazyQuery>;
export type GetAllMachinesDropdownSuspenseQueryHookResult = ReturnType<typeof useGetAllMachinesDropdownSuspenseQuery>;
export type GetAllMachinesDropdownQueryResult = Apollo.QueryResult<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>;
export const MaintenanceDocument = gql`
    query Maintenance($where: MaintenanceWhereInput, $orderBy: MaintenanceOrderByWithRelationInput, $offset: Int, $limit: Int) {
  maintenances(where: $where, orderBy: $orderBy, offset: $offset, limit: $limit) {
    id
    assignee {
      id
      name
    }
    from
    to
    elapsed
    description
    resolved
    name
    machine_id
  }
}
    `;

/**
 * __useMaintenanceQuery__
 *
 * To run a query within a React component, call `useMaintenanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaintenanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaintenanceQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMaintenanceQuery(baseOptions?: Apollo.QueryHookOptions<MaintenanceQuery, MaintenanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaintenanceQuery, MaintenanceQueryVariables>(MaintenanceDocument, options);
      }
export function useMaintenanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaintenanceQuery, MaintenanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaintenanceQuery, MaintenanceQueryVariables>(MaintenanceDocument, options);
        }
export function useMaintenanceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MaintenanceQuery, MaintenanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MaintenanceQuery, MaintenanceQueryVariables>(MaintenanceDocument, options);
        }
export type MaintenanceQueryHookResult = ReturnType<typeof useMaintenanceQuery>;
export type MaintenanceLazyQueryHookResult = ReturnType<typeof useMaintenanceLazyQuery>;
export type MaintenanceSuspenseQueryHookResult = ReturnType<typeof useMaintenanceSuspenseQuery>;
export type MaintenanceQueryResult = Apollo.QueryResult<MaintenanceQuery, MaintenanceQueryVariables>;
export const GetMaintananceDocument = gql`
    query getMaintanance($maintenanceId: Int!) {
  maintenance(id: $maintenanceId) {
    created_at
    updated_at
    description
    name
    id
    from
    to
    elapsed
    resolved
    un_planned
    ticket {
      id
      name
      created_at
    }
    assignee {
      id
      name
    }
    machine {
      id
      label
      priority
      block {
        id
        name
      }
      section {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetMaintananceQuery__
 *
 * To run a query within a React component, call `useGetMaintananceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaintananceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaintananceQuery({
 *   variables: {
 *      maintenanceId: // value for 'maintenanceId'
 *   },
 * });
 */
export function useGetMaintananceQuery(baseOptions: Apollo.QueryHookOptions<GetMaintananceQuery, GetMaintananceQueryVariables> & ({ variables: GetMaintananceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(GetMaintananceDocument, options);
      }
export function useGetMaintananceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaintananceQuery, GetMaintananceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(GetMaintananceDocument, options);
        }
export function useGetMaintananceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMaintananceQuery, GetMaintananceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(GetMaintananceDocument, options);
        }
export type GetMaintananceQueryHookResult = ReturnType<typeof useGetMaintananceQuery>;
export type GetMaintananceLazyQueryHookResult = ReturnType<typeof useGetMaintananceLazyQuery>;
export type GetMaintananceSuspenseQueryHookResult = ReturnType<typeof useGetMaintananceSuspenseQuery>;
export type GetMaintananceQueryResult = Apollo.QueryResult<GetMaintananceQuery, GetMaintananceQueryVariables>;
export const UpdateMaintananceDocument = gql`
    mutation updateMaintanance($updateMaintananceId: Int!, $updateMaintananceInput: MaintenanceUpdateInput!) {
  updateMaintanance(
    id: $updateMaintananceId
    updateMaintananceInput: $updateMaintananceInput
  ) {
    id
  }
}
    `;
export type UpdateMaintananceMutationFn = Apollo.MutationFunction<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>;

/**
 * __useUpdateMaintananceMutation__
 *
 * To run a mutation, you first call `useUpdateMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMaintananceMutation, { data, loading, error }] = useUpdateMaintananceMutation({
 *   variables: {
 *      updateMaintananceId: // value for 'updateMaintananceId'
 *      updateMaintananceInput: // value for 'updateMaintananceInput'
 *   },
 * });
 */
export function useUpdateMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>(UpdateMaintananceDocument, options);
      }
export type UpdateMaintananceMutationHookResult = ReturnType<typeof useUpdateMaintananceMutation>;
export type UpdateMaintananceMutationResult = Apollo.MutationResult<UpdateMaintananceMutation>;
export type UpdateMaintananceMutationOptions = Apollo.BaseMutationOptions<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>;
export const CreateMaintananceDocument = gql`
    mutation createMaintanance($createMaintananceInput: MaintenanceCreateInput!) {
  createMaintanance(createMaintananceInput: $createMaintananceInput) {
    id
  }
}
    `;
export type CreateMaintananceMutationFn = Apollo.MutationFunction<CreateMaintananceMutation, CreateMaintananceMutationVariables>;

/**
 * __useCreateMaintananceMutation__
 *
 * To run a mutation, you first call `useCreateMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaintananceMutation, { data, loading, error }] = useCreateMaintananceMutation({
 *   variables: {
 *      createMaintananceInput: // value for 'createMaintananceInput'
 *   },
 * });
 */
export function useCreateMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaintananceMutation, CreateMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaintananceMutation, CreateMaintananceMutationVariables>(CreateMaintananceDocument, options);
      }
export type CreateMaintananceMutationHookResult = ReturnType<typeof useCreateMaintananceMutation>;
export type CreateMaintananceMutationResult = Apollo.MutationResult<CreateMaintananceMutation>;
export type CreateMaintananceMutationOptions = Apollo.BaseMutationOptions<CreateMaintananceMutation, CreateMaintananceMutationVariables>;
export const ItemsDropDownDocument = gql`
    query itemsDropDown {
  items {
    id
    name
    code
  }
}
    `;

/**
 * __useItemsDropDownQuery__
 *
 * To run a query within a React component, call `useItemsDropDownQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsDropDownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsDropDownQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsDropDownQuery(baseOptions?: Apollo.QueryHookOptions<ItemsDropDownQuery, ItemsDropDownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsDropDownQuery, ItemsDropDownQueryVariables>(ItemsDropDownDocument, options);
      }
export function useItemsDropDownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsDropDownQuery, ItemsDropDownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsDropDownQuery, ItemsDropDownQueryVariables>(ItemsDropDownDocument, options);
        }
export function useItemsDropDownSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ItemsDropDownQuery, ItemsDropDownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ItemsDropDownQuery, ItemsDropDownQueryVariables>(ItemsDropDownDocument, options);
        }
export type ItemsDropDownQueryHookResult = ReturnType<typeof useItemsDropDownQuery>;
export type ItemsDropDownLazyQueryHookResult = ReturnType<typeof useItemsDropDownLazyQuery>;
export type ItemsDropDownSuspenseQueryHookResult = ReturnType<typeof useItemsDropDownSuspenseQuery>;
export type ItemsDropDownQueryResult = Apollo.QueryResult<ItemsDropDownQuery, ItemsDropDownQueryVariables>;
export const TicketsDocument = gql`
    query Tickets($where: TicketWhereInput, $skip: Float, $take: Float, $orderBy: TicketOrderByWithRelationInput) {
  tickets(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    description
    machine {
      id
      name
      label
    }
    name
    photos
    status
    user {
      id
      name
    }
    created_at
  }
}
    `;

/**
 * __useTicketsQuery__
 *
 * To run a query within a React component, call `useTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTicketsQuery(baseOptions?: Apollo.QueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options);
      }
export function useTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options);
        }
export function useTicketsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options);
        }
export type TicketsQueryHookResult = ReturnType<typeof useTicketsQuery>;
export type TicketsLazyQueryHookResult = ReturnType<typeof useTicketsLazyQuery>;
export type TicketsSuspenseQueryHookResult = ReturnType<typeof useTicketsSuspenseQuery>;
export type TicketsQueryResult = Apollo.QueryResult<TicketsQuery, TicketsQueryVariables>;
export const CreateTicketsDocument = gql`
    mutation createTickets($createTicketInput: TicketCreateInput!) {
  createTicket(createTicketInput: $createTicketInput) {
    id
    description
    machine {
      id
      name
      label
    }
    name
    photos
    status
    user {
      id
      name
    }
    created_at
  }
}
    `;
export type CreateTicketsMutationFn = Apollo.MutationFunction<CreateTicketsMutation, CreateTicketsMutationVariables>;

/**
 * __useCreateTicketsMutation__
 *
 * To run a mutation, you first call `useCreateTicketsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketsMutation, { data, loading, error }] = useCreateTicketsMutation({
 *   variables: {
 *      createTicketInput: // value for 'createTicketInput'
 *   },
 * });
 */
export function useCreateTicketsMutation(baseOptions?: Apollo.MutationHookOptions<CreateTicketsMutation, CreateTicketsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTicketsMutation, CreateTicketsMutationVariables>(CreateTicketsDocument, options);
      }
export type CreateTicketsMutationHookResult = ReturnType<typeof useCreateTicketsMutation>;
export type CreateTicketsMutationResult = Apollo.MutationResult<CreateTicketsMutation>;
export type CreateTicketsMutationOptions = Apollo.BaseMutationOptions<CreateTicketsMutation, CreateTicketsMutationVariables>;
export const GetTicketDocument = gql`
    query getTicket($ticketId: Int!) {
  ticket(id: $ticketId) {
    id
    description
    machine {
      id
      label
      priority
      block {
        id
        name
      }
      section {
        id
        name
      }
    }
    name
    photos
    status
    updated_at
    created_at
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTicketQuery__
 *
 * To run a query within a React component, call `useGetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketQuery({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function useGetTicketQuery(baseOptions: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables> & ({ variables: GetTicketQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
      }
export function useGetTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export function useGetTicketSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<typeof useGetTicketLazyQuery>;
export type GetTicketSuspenseQueryHookResult = ReturnType<typeof useGetTicketSuspenseQuery>;
export type GetTicketQueryResult = Apollo.QueryResult<GetTicketQuery, GetTicketQueryVariables>;
export const UsersDropDownDocument = gql`
    query usersDropDown($where: UsersWhereInput, $orderBy: UsersOrderByWithRelationInput, $limit: Int, $offset: Int) {
  users(where: $where, orderBy: $orderBy, limit: $limit, offset: $offset) {
    value: id
    name
    phone
  }
}
    `;

/**
 * __useUsersDropDownQuery__
 *
 * To run a query within a React component, call `useUsersDropDownQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersDropDownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersDropDownQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUsersDropDownQuery(baseOptions?: Apollo.QueryHookOptions<UsersDropDownQuery, UsersDropDownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(UsersDropDownDocument, options);
      }
export function useUsersDropDownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersDropDownQuery, UsersDropDownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(UsersDropDownDocument, options);
        }
export function useUsersDropDownSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersDropDownQuery, UsersDropDownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(UsersDropDownDocument, options);
        }
export type UsersDropDownQueryHookResult = ReturnType<typeof useUsersDropDownQuery>;
export type UsersDropDownLazyQueryHookResult = ReturnType<typeof useUsersDropDownLazyQuery>;
export type UsersDropDownSuspenseQueryHookResult = ReturnType<typeof useUsersDropDownSuspenseQuery>;
export type UsersDropDownQueryResult = Apollo.QueryResult<UsersDropDownQuery, UsersDropDownQueryVariables>;