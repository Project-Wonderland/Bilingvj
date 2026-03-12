export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  totalData: number;
}
export interface vendor {
  sNo: number;
  name: string;
  img: string;
  email: string;
  phone: string;
  created: string;
  balance: string;
}
export interface customers {
  sNo: number;
  isSelected?:boolean;
  img: string;
  flag:string;
  customer: string;
  country: string;
  balance: string;
  phone: string;
  totalInvoice: string;
  createdOn: string;
  status: string;
}
export interface customer {
  id: number;
  img: string;
  name: string;
  email: string;
  phone: string;
  balance: string;
  invoice: string;
  created: string;
  status: string;
}
export interface recurring {
  sNo: number;
  isSelected?:boolean;
  ID?:string;
  CreatedOn: string;
  Image: string;
  Customer: string;
  RecurringCycle: string;
  IssueDate: string;
  DueDate: string;
  Paid: string;
  DueAmount: string;
  Status: string;
}
export interface customertransactions {
  sNo: number;
  isSelected?:boolean;
  Type?:string;
  Amount: string;
  Date: string;
  PaymentMode: string;
  Status: string;
}
export interface customerinvoicereport {
  sNo: number;
  isSelected?:boolean;
  ID?:string;
  CreatedOn?:string;
  Amount: string;
  Paid: string;
  Status: string;
  PaymentMode: string;
  DueDate: string;
}
export interface pending {
  invoiceId: number;
  category: string;
  img: string;
  invoicePerson: string;
  mailId: string | number;
  totalAmount: number;
  paidAmount: number;
  paymentmode: string;
  balance: number;
  id: number;
  ticketId: string;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string;
  createdOn: string;
  dueDate: string;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string;
  priority: string;
  status: string;
}
export interface overdue {
  id: number;
  ticketId: string;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string;
  createdOn: string;
  dueDate: string;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface ticket {
  id: number;
  ticket: number;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string | number;
  createdOn: string | number;
  dueDate: string | number;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface ticketsopen {
  id: number;
  ticketsopen: string | number;
  ticketId: number;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string | number;
  createdOn: string | number;
  dueDate: string | number;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface ticket {
  ticketId: number;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string | number;
  createdOn: string | number;
  dueDate: string | number;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface ticketLists {
  sNo:number;
  isSelected?:boolean;
  ticketId:string;
  subject:string;
  assigned:string;
  assignedDate:string;
  priority:string;
  createdOn:string;
  assignee:string;
  status:string;
  img:string;
  img2:string;
}
export interface cancelled {
  ticketId: number;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string | number;
  createdOn: string | number;
  dueDate: string | number;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface testimonials {
  sNo: number;
  isSelected?:boolean;
  img: string;
  customer: string;
  rating: string;
  content: string;
  createdOn: string;
  status: string;

}
export interface moneyTransfer {
  sNo: number;
  isSelected?:boolean;
  date:string;
  referenceNumber: string;
  img: string;
  fromAccountNo: string;
  toAccountNo: string;
  amount: string | number;
  status: string;
}
export interface role {
  id: number;
  role: string;
  created: string | number;
}
export interface tax {
  id: number;
  date: string | number;
  economic_zone: string;
  tax: string;
  tax_rate: number;
  net: number;
  gross: number;
  amount: number;
}
export interface sales {
  id: string | number;
  date: number;
  category: string;
  sales: number;
  refunded: number;
  discounts: number;
  tax: number;
  amount: number;
}
export interface sales {
  id: string | number;
  date: number;
  category: string;
  sales: number;
  refunded: number;
  discounts: number;
  tax: number;
  amount: number;
}
export interface expense {
  sNo:number;
  isSelected?:boolean;
  id:string;
  date:string;
  referenceNumber:string;
  description:string;
  amount:string;
  paymentMode:string;
  status:string;
}
export interface expensereport {
  sNo: number;
  companyName: string;
  mailId: string;
  amount: string;
  img: string;
  paymentStatus: string;
  category: string;
  createdDate: string;
}
export interface purchasereport {
  id: number;
  sNo: number;
  isSelected?:boolean;
  date: string;
  vendor: string;
  amount: string;
  paymentMode: string;
  status: string;
}
export interface quotationReport {
  id: number;
  sNo: number;
  isSelected?:boolean;
  quotationId: string;
  customer: string;
  amount: string;
  img: string;
  status: string;
  category: string;
  createdOn: string;
  duedate: string;
  serialNo: string;
}
export interface paymentreport {
  sNo: number;
  companyName: string;
  mailId: string;
  amount: string;
  amount2: string;
  amount3: string;
  img: string;
}
export interface purchasereport {
  sNo: number;
  product: string;
  productImg: string;
  purchaseAmount: string;
  purchaseQty: string;
  instockQty: string;
}
export interface purchasereturnreport {
  id: number;
  sNo: number;
  product: string;
  productImg: string;
  purchaseAmount: string;
  purchaseQty: string;
  instockQty: string;
  duedate: string;
}
export interface stockreport {
  id: number;
  sNo: number;
  product: string;
  productImg: string;
  sku: string;
  category: string;
  soldAmount: string;
  soldQty: string;
  openQty: string;
  instockQty: string;
  duedate: string;
  closeQty: string;
}
export interface recurringinvoice {
  id: number;
  recurringinvoice: number;
  invoiceId: number;
  category: string;
  createdOn: string | number;
  invoicePerson: string;
  img: string;
  mailId: string;
  totalAmount: number;
  paidAmount: number;
  paymentmode: string;
  balance: number;
  dueDate: string | number;
  status: string;
  status1: string;
}
export interface draft {
  id: number;
  invoiceId: number;
  category: string;
  createdOn: string | number;
  invoicePerson: string;
  img: string;
  mailId: string;
  totalAmount: number;
  paidAmount: number;
  paymentmode: string;
  balance: number;
  dueDate: string | number;
  status: string;
}
export interface recurringcancelled {
  id?: number;
  invoiceId: number;
  category: string;
  createdOn: string | number;
  invoicePerson: string;
  img: string;
  mailId: string;
  totalAmount: number;
  paidAmount: number;
  paymentmode: string;
  balance: number;
  dueDate: string | number;
  status: string;
}
export interface quotation {
  sNo: number;
  isSelected?:boolean;
  quotationId: number;
  customer: string;
  img: string;
  createdOn: string ;
  status: string;
}
export interface editcreditnotes {
  sNo: number;
  editcreditnotes: number;
  product: number;
  quantity: number;
  unit: string;
  rate: number;
  discount: number;
  tax: number;
  amount: number;
}
export interface purchase {
  sNo: number;
  isSelected?:boolean;
  id: number;
  vendor: string;
  img: string;
  amount: number;
  paymentMode: string;
  date: string ;
  status: string;
}
export interface units {
  id: number;
  unit: string;
  short: string;
}
export interface productlist {
  id: number;
  isSelected?:boolean;
  code: string;
  product: string;
  category: string;
  unit: string;
  quantity: number;
  sales: number;
  img: string;
  sellingPrice: string;
  purchasePrice: string;
}
export interface category {
  sNo: number;
  isSelected?:boolean;
  category: string;
  noOfProducts: string;
  img: string;
}
export interface payments {
  sNo: number;
  isSelected?:boolean;
  customer: string;
  paymentId: string;
  img: string;
  paidDate: number;
  amount: number;
  paymentMethod: string;
}
export interface paymentsummary {
  id: number;
  transaction: number;
  invoice: number;
  name: string;
  phone: number;
  img: string;
  amount: string;
  date: number | string;
  paymentMethod: string;
}
export interface AddPages {
  sNo: number;
  pages: string;
  slug: string;
  value: string;
}
export interface transaction {
  sNo: number;
  isSelected?: boolean;
  transactionId: string;
  invoiceId: string;
  customer: string;
  paidDate: string;
  amount: string;
  paymentMode: string;
  img:string;
}
export interface subscribers {
  sNo: number;
  isSelected?: boolean;
  provider: string;
  subscription: string;
  img: string;
  amount: number;
  duration: string;
  startDate: string ;
  endDate: string ;
}
export interface membershipTransaction{
  sNo:number;
  isSelected?:boolean;
  type:string;
  amount:string;
  date:string;
  paymentMode:string;
  status:string;
}
export interface contactMessage{
  sNo:number;
  isSelected?:boolean;
  name:string;
  email:string;
  phone:string;
  message:string;
  createdOn:string;
  img:string;
}
export interface user {
  sNo: number;
  isSelected?: boolean;
  user: string;
  img: string;
  phone: string;
  role: string;
  lastActivity:  string;
  createdOn:  string;
  status: string;
}
export interface states {
  sNo: number;
  isSelected?:boolean;
  img:string;
  countryCode: string;
  country: string;
  state: string;
}
export interface countries {
  sNo: number;
  isSelected?:boolean;
  img:string;
  countryCode: string;
  country: number;
  countryId: string;
}
export interface cities {
  sNo: number;
  isSelected?:boolean;
  img:string;
  country: string;
  state: string;
  city: string;
}
export interface ledger {
  id: number;
  ledger: number;
  name: number;
  img: string;
  pho: number;
  reference: number;
  created: string | number;
  mode: string;
}
export interface itemList {
  item: number;
  price: number;
  discount: number;
  description: string;
  date: number | string;
}
export interface InvoicesRecurring {
  id?: number;
  invoiceId: number;
  invoice: number;
  category: string;
  created: string | number;
  name: string;
  email: string;
  img: string;
  total: number;
  paid: number;
  payment: string;
  balance: number;
  due: number | string;
  status: string;
}
export interface invoicepaid {
  sNo: number;
  invoiceId: number;
  invoice: number;
  category: string;
  created: string | number;
  name: string;
  email: string;
  img: string;
  total: number;
  paid: number;
  payment: string;
  balance: number;
  due: number | string;
  status: string;
}
export interface invoiceoverdue {
  sNo: number;
  invoiceId: number;
  invoice: number;
  name: string;
  email: string;
  img: string;
  amount: number;
  created: number | string;
  last: number | string;
  status: number | string;
  category: string;
  total: string;
  paid: string;
  payment: string;
  balance: string;
  due: string;
}
export interface InvoicesDraft {
  invoiceId: number;
  invoice: number;
  name: string;
  email: string;
  img: string;
  amount: number;
  created: number | string;
  last: number | string;
  status: number | string;
  category: string;
  total: string;
  paid: string;
  payment: string;
  balance: string;
  due: string;
}
export interface invoicecancelled {
  invoiceId: number;
  invoice: number;
  name: string;
  email: string;
  img: string;
  amount: number;
  created: number | string;
  cancel: number | string;
  status: string;
  category: string;
  total: string;
  paid: string;
  payment: number;
  balance: string;
  due: string;
}
export interface invoice {
  sNo: number;
  isSelected?:boolean;
  id: number;
  customer: number;
  createdOn: string;
  amount: string;
  paid: string;
  paymentMode: string;
  dueDate: string;
  status: string;
  img: string;
}
export interface inventory {
  sNo: number;
  isSelected?:boolean;
  productService: string;
  code: string ;
  unit: string ;
  quantity: string;
  sellingPrice: string;
  purchasePrice: string;
  img: string;
}
export interface faq {
  sNo: number;
  isSelected?:boolean;
  Title: string;
  Category: string | number;
  Description: string;
}
export interface signature {
  id: number;
  signaturename: string;
  signature: string;
}
export interface invoiceone {
  id: number;
  invoicetitle: string;
}
export interface estimates {
  id: number;
  number: string | number;
  customer_name: string;
  customer_img: string;
  estimate_date: string | number;
  expiry_date: string | number;
  amount: number;
  status: string;
}
export interface deliverychallans {
  sNo: number;
  isSelected?:boolean;
  challanId: string;
  customer: string;
  img: string;
  amount: string;
  category: string;
  createdOn: string;
}
export interface deleteaccount {
  sNo: number;
  isSelected?: boolean;
  user: string;
  deleteRequestDate: string;
  img: string;
}
export interface membershipAddon {
  sNo: number;
  isSelected?: boolean;
  addonName: string;
  planName: string;
  createdOn: string;
  price: string;
  status: string;
}
export interface debitnotes {
  sNo: number;
  isSelected?:boolean;
  id: number;
  vendor: string;
  img: string;
  amount: number;
  paymentMode: string;
  date: string ;
  status: string;
}
export interface supplier {
  sNo: number;
  isSelected?:boolean;
  supplier: number;
  phone: string;
  image: string;
  createdOn: number;
  balance: string;
  currency: string ;
}
export interface supplierPayment {
  sNo: number;
  isSelected?:boolean;
  supplier: number;
  paymentId: string;
  img: string;
  paidDate: number;
  amount: string;
  paymentMethod: string ;
}
export interface deactivecustomer {
  sNo: number;
  id: number;
  img: string;
  name: string;
  email: string;
  phone: number;
  balance: number;
  invoice: number;
  created: string | number;
  status: string;
}
export interface activecustomer {
  sNo: number;
  id: number;
  img: string;
  name: string;
  email: string;
  phone: number;
  balance: number;
  invoice: number;
  created: number | string;
  status: string;
}
export interface creditnotes {
  sNo: number;
  isSelected?:boolean;
  creditNoteId: number;
  customer: string;
  img: string;
  amount: string;
  relatedTo: string;
  paymentMode: string;
  createdOn:string;
  status: string;
}
export interface creditnotesrecurring {
  sNo: number;
  customerId: number;
  customer: string;
  img: string;
  mailId: string;
  amount: number;
  paymentmode: string;
  createdOn: number | string;
  status: string;
}
export interface creditnotespending {
  sNo: number;
  customerId: number;
  customer: string;
  img: string;
  mailId: string;
  amount: number;
  paymentmode: string;
  createdOn: number | string;
  status: string;
}
export interface creditnotesoverdue {
  sNo: number;
  customerId: number;
  customer: string;
  img: string;
  mailId: string;
  amount: number;
  paymentmode: string;
  createdOn: number | string;
  status: string;
}
export interface creditnotesdraft {
  sNo: number;
  customerId: number;
  customer: string;
  img: string;
  mailId: string;
  amount: number;
  paymentmode: string;
  createdOn: number | string;
  status: string;
}
export interface creditnotescancel {
  sNo: number;
  customerId: number;
  customer: string;
  img: string;
  mailId: string;
  amount: number;
  paymentmode: string;
  createdOn: number | string;
  status: string;
}
export interface messages {
  sNo: number;
  name: string;
  img: string;
  email: string;
  mobileNumber: number;
  message: string;
  createdOn: number | string;
}
export interface blogcomments {
  sNo: number;
  name: string;
  phone: number;
  img: string;
  mail: string;
  content: string;
  date: string | number;
}
export interface allBlogs {
  id: number;
  imgs: string;
  date1: number;
  month: string;
  img2: string;
  names: string;
  date: string | number;
  para: string;
  para2: string;
  status: boolean;
}

export interface subMenus {
  url: string;
  separateRoute: boolean;
  menuValue: string;
  tittle: string;
  icon: string;
  showAsTab: boolean;
  showSubRoute: boolean;
  title: string;
  route?: string;
  base?: string;
  MenuItem: string;
}
export interface mainMenus {
  menu: MenuItem[];
  separateRoute: boolean;
  menuValue: string;
  tittle: string;
  route: string;
  base: string;
  icon: string;
  showAsTab: boolean;
  active: boolean;
  showSubRoute: boolean;
  url: string;
}
export interface mainMenu {
  menu: MenuItem[];
  separateRoute: boolean;
  menuValue: string;
  tittle: string;
  route: string;
  base: string;
  icon: string;
  showAsTab: boolean;
  url: string;
}
export interface Menu {
  menuValue: string;
  showSubRoute: boolean;
  route: string;
  hasSubRoute: boolean;
  hasSubRouteTwo2?:boolean;
  icon: string;
  base: string;
  url: string;
}
export interface MenuItem {
  menuValue: string;
  showSubRoute: boolean;
  route: string;
  hasSubRoute: boolean;
  icon: string;
  base: string;
  url: string;
  hasSubRouteTwo2?:boolean;
}

export interface SideBarData {
  tittle: string;
  active: boolean;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: MenuItem[];
  menuValue: string;
  menuValue1?: string;
  showSubRoute: boolean;
  route: string;
  hasSubRoute: boolean;
  base: string;
  subMenus: subMenus[];
  Mainmenu: mainMenu[];
  url: string;
}

export interface breadCrumbData{
  hasSubData:boolean;
  data:string;
  data2?:string;
  route?:string;
  base:string;
}
export interface url {
  url: string;
}
export interface RouterObject {
  id?: number;
  url: string;
  type?: number;
}
export interface ticketsresolved {
  id: number;
  ticketsresolved: string | number;
  ticketId: number;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string | number;
  createdOn: string | number;
  dueDate: string | number;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface ticketsclosed {
  id: number;
  ticketsclosed: number;
  ticketsresolved: string | number;
  ticketId: number;
  subject: string;
  assigned: string;
  assignedPerson: string;
  assignedDate: string | number;
  createdOn: string | number;
  dueDate: string | number;
  assignee: string;
  assigneeImg: string;
  assigneePho: number;
  lastReply: string | number;
  priority: string;
  status: string;
}
export interface bankaccount {
  sNo: number;
  isSelected?:boolean;
  img:string;
  accountHolderName: string;
  accountNo: string;
  accountType: string;
  notes:  string;
  createdOn?:  string;
  openingBalance:  string;
  status:  string;
}
export interface companies {
  sNo: number;
  isSelected?:boolean;
  Company: string;
  Image: string;
  Email: string;
  AccountURL: string;
  Plan: string;
  CreatedOn: string;
  Status: string;
}
export interface purchasereport {
  sNo: number;
  product: string;
  productImg: string;
  purchaseAmount: string;
  purchaseQty: string;
  instockQty: string;
}
export interface expensereport {
  sNo: number;
  isSelected?:boolean;
  ID: string;
  Date: string;
  ReferenceNumber: string;
  Description: string;
  Amount: string;
  PaymentMode: string;
  Status: string;
}
export interface incomereport {
  sNo: number;
  isSelected?:boolean;
  ID: string;
  Date: string;
  ReferenceNumber: string;
  Description: string;
  Amount: string;
  PaymentMode: string;
}
export interface balancesheet {
  sNo: number;
  isSelected?:boolean;
  AccountHolderName: string;
  Image: string;
  BankAccountNo: string;
  Credit: string;
  Debit: string;
  Balance: string;
}
export interface trialbalance {
  sNo: number;
  isSelected?:boolean;
  AccountName: string;
  Credit: string;
  Debit: string;
}
export interface cashflow {
  sNo: number;
  isSelected?:boolean;
  Date: string;
  BankAccountNo: string;
  Description: string;
  Credit: string;
  Debit: string;
  AccountBalance: string;
  TotalBalance: string;
  PaymentMode: string;
}
export interface accountstatement {
  sNo: number;
  isSelected?:boolean;
  ReferenceNumber: string;
  Date: string;
  Category: string;
  Description: string;
  Amount: string;
  TransactionType: string;
  Balance: string;
}
export interface subscription {
  sNo: number;
  isSelected?:boolean;
  Company: string;
  Image: string;
  Plan: string;
  BillingCycle: string;
  PaymentMode: string;
  Amount: string;
  CreatedOn: string;
  ExpiringOn: string;
  Status: string;
}
export interface packages {
  sNo: number;
  Plan: string;
  PlanType: string;
  TotalSubscribers: string;
  Amount: string;
  CreatedOn: string;
  Status: string;
}
export interface domainRequest {
  id: number;
  customer: string;
  email: string;
  domain: string;
  noOfEmployees: string;
  package1: string;
  package2: string;
  createdOn: string;
  status: string;
}
export interface domain {
  sNo: number;
  isSelected?:boolean;
  Company: string;
  Image: string;
  DomainURL: string;
  Plan: string;
  CreatedOn: string;
  Status: string;
}
export interface purchaseTransaction {
  sNo: number;
  isSelected?:boolean;
  ID: number;
  Customer: string;
  Image: string;
  Email: string;
  CreatedOn: string;
  Amount: string;
  PaymentMode: string;
  Status: string;
}
export interface taxPurchase {
  id: number;
  supplier: string;
  date: string;
  refNo: string;
  totalAmount: string;
  paymentMethod: string;
  discount: string;
  taxAmount: string;
  img: string;
  customer: string;
  invoiceNo: string;
}
export interface salesreturnreport {
  id: number;
  companyName: string;
  mailId: string;
  amount: string;
  img: string;
  paymentStatus: string;
  category: string;
  createdDate: string;
}
export interface salesreport {
  sNo: number;
  isSelected?:boolean;
  img: string;
  sku: string;
  product: string;
  category: string;
  soldAmount: string;
  soldQuantity: string;
  instockQuantity: string;
  dueDate: string;
  paymentMode: string;
}
export interface salesreturnreport {
  sNo: number;
  isSelected?:boolean;
  img: string;
  creditNoteId: string;
  customer: string;
  amount: string;
  relatedTo: string;
  paymentMode: string;
  createdOn: string;
  status: string;

}
export interface url {
  url: string;
}
export interface planBillingOwl {
  name: string;
  remainingDays: string;
  price: string;
  billingPeriod: string;
  text: string;
  img: string;
  customClass?: boolean;
}
export interface planBilling {
  id: number;
  date: string;
  details1: string;
  details2: string;
  status: string;
}
export interface customField {
  id: number;
  modules: string;
  label: string;
  type: string;
  defaultValue: string;
  required: string;
}
export interface inventoryHistory {
  sNo: number;
  id: number;
  item: string;
  code: string;
  units: string;
  quantity: string;
  sellingPrice: string;
  purchasePrice: string;
}
export interface SideBar {
  showMyTab?: boolean;
  tittle: string;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  materialicons?: string;
  menu: SideBarMenu[];
}
export interface SideBarMenu {
  showMyTab?: boolean;
  menuValue: string;
  menuValue1?: string;
  route?: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  icon: string;
  base: string;
  materialicons: string;
  subMenus: SubMenu[];
}
export interface SubMenu {
  menuValue: string;
  menuValue1?: string;
  hasSubRouteTwo?:boolean;
  route?: string;
  base: string;
  base2?: string;
  base3?: string;
  base4?: string;
  base5?: string;
  base6?: string;
  base7?: string;
  base8?: string;
  subMenus?: SubMenu[]
}
export interface dataTables {
  id: number;
  name: string;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
}
export interface userList {
  id: number;
  img: string;
  name: string;
  email: string;
  phone: string;
  balance: string;
  invoice: string;
  created: string;
  status: string;
  role?: string;
  registered_on?: string;
}
export interface plansList {
  id: number;
  planName: string;
  planType: string;
  price: string;
  users: string;
  suppliers: string;
  products: string;
  invoice: string;
  createdDate: string;
  status: string;
}

export interface reports{
  sNo: number;
  isSelected?: boolean;
  img: string;
  code:string;
  category:string;
  product: string;
  unit: string;
  price: string;
  quantity: string;
  closingQuantity: string;
  totalPrice: string;
  sellingPrice: string;
  purchasePrice: string;
  addedQuantity: string;
  soldQuantity: string;
  defectiveQuantity: string;
  profit: string;
  date:string;
  sku:string;
  customer:string;
  mode:string;
}


export interface customerReport {
  sNo:number;
  isSelected?:boolean;
  customer: string;
  img: string;
  phone: string;
  country: string;
  flag: string;
  balance: string;
  totalInvoice: string;
  createdOn: string;
  status: string;
}

export interface customerDueReport {
  sNo:number;
  isSelected?:boolean;
  id: string;
  customer: string;
  image: string;
  totalAmount: string;
  paid: string;
  status: string;
  due: string;
}

export interface suppliers {
  sNo:number;
  isSelected?:boolean;
  supplier: string;
  image: string;
  phone: string;
  createdOn: string;
  balance: string;
  currency: string;
}
export interface pages {
  sNo:number;
  isSelected?:boolean;
  pages: string,
  pageSlug: string,
  status: string
}

export interface blogCategory {
  sNo:number;
  isSelected?:boolean;
  category: string;
  date: string;
  status: string;
}

export interface blogTag {
  sNo:number;
  isSelected?:boolean;
  img: string;
  tag: string;
  createdDate: string;
  status: string;
}

export interface blogComment {
  sNo:number;
  isSelected?:boolean;
  img: string;
  customer: string;
  email: string;
  content: string;
  createdOn: string;
}

export interface contacts {
  sNo:number;
  isSelected?:boolean;
  id: string;
  img: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
}

