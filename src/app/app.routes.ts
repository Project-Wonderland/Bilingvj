import { Routes } from '@angular/router';
import { SettingComponent } from './features/setting/setting.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  //Auth Routes//
  { path: 'auth', loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: 'login', loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),},
      { path: 'register', loadComponent: () => import('./auth/register/register.component').then((m) => m.RegisterComponent),},
      { path: 'lock-screen', loadComponent: () => import('./auth/lock-screen/lock-screen.component').then((m) => m.LockScreenComponent,),},
      { path: 'forgot-password', loadComponent: () => import('./auth/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent,),},
      { path: 'email-verification', loadComponent: () => import('./auth/email-verification/email-verification.component').then(m => m.EmailVerificationComponent) },
      { path: 'two-step-verification', loadComponent: () => import('./auth/two-step-verification/two-step-verification.component').then(m => m.TwoStepVerificationComponent) },
      { path: 'reset-password', loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
      { path: 'success', loadComponent: () => import('./auth/success/success.component').then(m => m.SuccessComponent) },
    ],
  },
  //Features Routes//
  
  { path: '', loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent), 
    children:[
      { path: 'index', loadComponent: () => import('./features/dashboard/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
      { path: 'admin-dashboard', loadComponent: () => import('./features/dashboard/admin-dashboard-2/admin-dashboard-2.component').then(m => m.AdminDashboard2Component) },

      //Application//
      { path: 'application',loadComponent: () => import('./features/application/application.component').then(m => m.ApplicationComponent),
        children: [
          { path: 'chat', loadComponent: () => import('./features/application/chat/chat.component').then(m => m.ChatComponent) },
          { path: 'calender', loadComponent: () => import('./features/application/calender/calender.component').then(m => m.CalenderComponent) },
          { path: 'email', loadComponent: () => import('./features/application/email/email.component').then(m => m.EmailComponent) },
          { path: 'email-reply', loadComponent: () => import('./features/application/email-reply/email-reply.component').then(m => m.EmailReplyComponent) },
          { path: 'todo', loadComponent: () => import('./features/application/todo/todo.component').then(m => m.TodoComponent) },
          { path: 'notes', loadComponent: () => import('./features/application/notes/notes.component').then(m => m.NotesComponent) },
          { path: 'social-feed', loadComponent: () => import('./features/application/social-feed/social-feed.component').then(m => m.SocialFeedComponent) },
          { path: 'file-manager', loadComponent: () => import('./features/application/file-manager/file-manager.component').then(m => m.FileManagerComponent) },
          { path: 'kanban-view', loadComponent: () => import('./features/application/kanban-view/kanban-view.component').then(m => m.KanbanViewComponent) },
          { path: 'contacts', loadComponent: () => import('./features/application/contacts/contacts.component').then(m => m.ContactsComponent) },
          { path: 'invoice', loadComponent: () => import('./features/application/invoice/invoice.component').then(m => m.InvoiceComponent) },
          { path: 'search-list', loadComponent: () => import('./features/application/search-list/search-list.component').then(m => m.SearchListComponent) },
          { path: 'todo-list', loadComponent: () => import('./features/application/todo-list/todo-list.component').then(m => m.TodoListComponent) },
          { path: 'calls', loadComponent: () => import('./features/application/calls/calls.component').then(m => m.CallsComponent),
            children: [
              { path: 'voice-call', loadComponent: () => import('./features/application/calls/voice-call/voice-call.component').then(m => m.VoiceCallComponent) },
              { path: 'video-call', loadComponent: () => import('./features/application/calls/video-call/video-call.component').then(m => m.VideoCallComponent) },
              { path: 'outgoing-call', loadComponent: () => import('./features/application/calls/outgoing-call/outgoing-call.component').then(m => m.OutgoingCallComponent) },
              { path: 'incoming-call', loadComponent: () => import('./features/application/calls/incoming-call/incoming-call.component').then(m => m.IncomingCallComponent) },
              { path: 'call-history', loadComponent: () => import('./features/application/calls/call-history/call-history.component').then(m => m.CallHistoryComponent) }
            ]
            
           }
        ]
      },
      
      //Super Admin//
      { path: 'super-admin', loadComponent: () => import('./features/super-admin/super-admin.component').then(m => m.SuperAdminComponent),
        children: [
          { path: 'companies', loadComponent: () => import('./features/super-admin/companies/companies.component').then(m => m.CompaniesComponent) },
          { path: 'subscriptions', loadComponent: () => import('./features/super-admin/subscription/subscription.component').then(m => m.SubscriptionComponent) },
          { path: 'packages', loadComponent: () => import('./features/super-admin/packages/packages.component').then(m => m.PackagesComponent) },
          { path: 'domain-request', loadComponent: () => import('./features/super-admin/domain-request/domain-request.component').then(m => m.DomainRequestComponent) },
          { path: 'domain', loadComponent: () => import('./features/super-admin/domain/domain.component').then(m => m.DomainComponent) },
          { path: 'purchase-transaction', loadComponent: () => import('./features/super-admin/purchase-transaction/purchase-transaction.component').then(m => m.PurchaseTransactionComponent) },
          { path: 'dashboard', loadComponent: () => import('./features/super-admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          { path: 'plans-list', loadComponent: () => import('./features/super-admin/plans-list/plans-list.component').then(m => m.PlansListComponent) },
          { path: 'packages-grid', loadComponent: () => import('./features/super-admin/packages-grid/packages-grid.component').then(m => m.PackagesGridComponent) }
        ]
      },

      //Customers
      { path: 'customer', loadComponent: () => import('./features/customers/customers.component').then((m)=>m.CustomersComponent) ,
        children:[
          { path: 'dashboard', loadComponent: () => import('./features/customers/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          { path: 'quotations', loadComponent: () => import('./features/customers/customer-quotations/customer-quotations.component').then(m => m.CustomerQuotationsComponent) },
          { path: 'add-quotations', loadComponent: () => import('./features/customers/add-quotations/add-quotations.component').then(m => m.AddQuotationsComponent) },
          { path: 'invoices', loadComponent: () => import('./features/customers/invoices/invoices.component').then(m => m.InvoicesComponent) },
          { path: 'recurring-invoices', loadComponent: () => import('./features/customers/recurring-invoices/recurring-invoices.component').then(m => m.RecurringInvoicesComponent) },
          { path: 'transactions', loadComponent: () => import('./features/customers/transactions/transactions.component').then(m => m.TransactionsComponent) },
          { path: 'payment-summary', loadComponent: () => import('./features/customers/payment-summary/payment-summary.component').then(m => m.PaymentSummaryComponent) },
          { path: 'invoice-report', loadComponent: () => import('./features/customers/invoice-report/invoice-report.component').then(m => m.InvoiceReportComponent) },
          { path: 'settings', loadComponent: () => import('./features/customers/settings/settings.component').then(m => m.SettingsComponent),
            children : [
              { path: 'account-settings', loadComponent: () => import('./features/customers/settings/account-settings/account-settings.component').then(m => m.AccountSettingsComponent) },
              { path: 'security-settings', loadComponent: () => import('./features/customers/settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
              { path: 'plans-billing', loadComponent: () => import('./features/customers/settings/plans-settings/plans-settings.component').then(m => m.PlansSettingsComponent) },
              { path: 'notification-settings', loadComponent: () => import('./features/customers/settings/notification-settings/notification-settings.component').then(m => m.NotificationSettingsComponent) },
            ]
           }, 
          { path: 'invoice-details', loadComponent: () => import('./features/customers/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
        ]
      },

      //Inventroy
      { path: 'invoices', loadComponent: () => import('./features/invantory-sales/invoices/invoices.component').then(m => m.InvoicesComponent),
        children: [
          { path: 'invoice-list', loadComponent: () => import('./features/invantory-sales/invoices/invoice-list/invoice-list.component').then(m => m.InvoiceListComponent) },
          { path: 'add-invoice', loadComponent: () => import('./features/invantory-sales/invoices/add-invoice/add-invoice.component').then(m => m.AddInvoiceComponent) },
          { path: 'edit-invoice', loadComponent: () => import('./features/invantory-sales/invoices/edit-invoice/edit-invoice.component').then(m => m.EditInvoiceComponent) },
          { path: 'invoice-details', loadComponent: () => import('./features/invantory-sales/invoices/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
          { path: 'recurring-invoices', loadComponent: () => import('./features/invantory-sales/invoices/recurring-invoices/recurring-invoices.component').then(m => m.RecurringInvoicesComponent) },
          { path: 'invoice-templates', loadComponent: () => import('./features/invantory-sales/invoices/invoice-templates/invoice-templates.component').then(m => m.InvoiceTemplatesComponent) },
        ]
      },
      { path: 'product-service', loadComponent: () => import('./features/invantory-sales/products-service/products-service.component').then(m => m.ProductsServiceComponent),
        children: [
          { path: 'product-list', loadComponent: () => import('./features/invantory-sales/products-service/product-list/product-list.component').then(m => m.ProductListComponent) },
          { path: 'category', loadComponent: () => import('./features/invantory-sales/products-service/category/category.component').then(m => m.CategoryComponent) },
          { path: 'units', loadComponent: () => import('./features/invantory-sales/products-service/units/units.component').then(m => m.UnitsComponent) },
          { path: 'add-products', loadComponent: () => import('./features/invantory-sales/products-service/add-products/add-products.component').then(m => m.AddProductsComponent) },
          { path: 'edit-products', loadComponent: () => import('./features/invantory-sales/products-service/edit-products/edit-products.component').then(m => m.EditProductsComponent) }
        ]
      },
      { path: 'inventory', loadComponent: () => import('./features/invantory-sales/inventory/inventory.component').then(m => m.InventoryComponent) },
      { path: 'credit-notes', loadComponent: () => import('./features/invantory-sales/credit-notes/credit-notes.component').then(m => m.CreditNotesComponent),
        children:[
          { path: 'add-credit-notes', loadComponent: () => import('./features/invantory-sales/credit-notes/add-credit-notes/add-credit-notes.component').then(m => m.AddCreditNotesComponent) }, 
          { path: 'edit-credit-notes', loadComponent: () => import('./features/invantory-sales/credit-notes/edit-credit-notes/edit-credit-notes.component').then(m => m.EditCreditNotesComponent) }, 
          { path: 'credit-note-list', loadComponent: () => import('./features/invantory-sales/credit-notes/credit-note-list/credit-note-list.component').then(m => m.CreditNoteListComponent) }
        ]
      },
      { path: 'quotations', loadComponent: () => import('./features/invantory-sales/quotations/quotations.component').then(m => m.QuotationsComponent),
        children: [
          { path: 'add-quotation', loadComponent: () => import('./features/invantory-sales/quotations/add-quotation/add-quotation.component').then(m => m.AddQuotationComponent) },
          { path: 'edit-quotation', loadComponent: () => import('./features/invantory-sales/quotations/edit-quotation/edit-quotation.component').then(m => m.EditQuotationComponent) },
          { path: 'quotation-list', loadComponent: () => import('./features/invantory-sales/quotations/quotation-list/quotation-list.component').then(m => m.QuotationListComponent) }
        ]
      },
      { path: 'customers', loadComponent: () => import('./features/invantory-sales/customers/customers.component').then(m => m.CustomersComponent),
        children: [
          { path: 'customer-list', loadComponent: () => import('./features/invantory-sales/customers/customer-list/customer-list.component').then(m => m.CustomerListComponent) },
          { path: 'customer-details', loadComponent: () => import('./features/invantory-sales/customers/customer-details/customer-details.component').then(m => m.CustomerDetailsComponent) },
          { path: 'add-customer', loadComponent: () => import('./features/invantory-sales/customers/add-customer/add-customer.component').then(m => m.AddCustomerComponent) },
          { path: 'edit-customer', loadComponent: () => import('./features/invantory-sales/customers/edit-customer/edit-customer.component').then(m => m.EditCustomerComponent) },
        ]
      },
      { path: 'delivery-challans', loadComponent: () => import('./features/invantory-sales/delivery-challans/delivery-challans.component').then(m => m.DeliveryChallansComponent),
        children: [
          { path: 'delivery-challan-list', loadComponent: () => import('./features/invantory-sales/delivery-challans/delivery-challan-list/delivery-challan-list.component').then(m => m.DeliveryChallanListComponent) },
          { path: 'add-delivery-challan', loadComponent: () => import('./features/invantory-sales/delivery-challans/add-delivery-challan/add-delivery-challan.component').then(m => m.AddDeliveryChallanComponent) },
          { path: 'edit-delivery-challan', loadComponent: () => import('./features/invantory-sales/delivery-challans/edit-delivery-challan/edit-delivery-challan.component').then(m => m.EditDeliveryChallanComponent) },
        ]
      },

      //Purchase
      { path: 'purchases', loadComponent: () => import('./features/purchases/purchases/purchases.component').then(m => m.PurchasesComponent),
      children: [
        { path: 'purchase-list', loadComponent: () => import('./features/purchases/purchases/purchase-list/purchase-list.component').then(m => m.PurchaseListComponent) },
        { path: 'add-purchase', loadComponent: () => import('./features/purchases/purchases/add-purchase/add-purchase.component').then(m => m.AddPurchaseComponent) },
        { path: 'edit-purchase', loadComponent: () => import('./features/purchases/purchases/edit-purchase/edit-purchase.component').then(m => m.EditPurchaseComponent) }
      ]        
      },
      { path: 'purchase-orders', loadComponent: () => import('./features/purchases/purchase-orders/purchase-orders.component').then(m => m.PurchaseOrdersComponent),
      children: [
        { path: 'add-purchases-orders', loadComponent: () => import('./features/purchases/purchase-orders/add-purchases-orders/add-purchases-orders.component').then(m => m.AddPurchasesOrdersComponent) },
        { path: 'edit-purchases-orders', loadComponent: () => import('./features/purchases/purchase-orders/edit-purchases-orders/edit-purchases-orders.component').then(m => m.EditPurchasesOrdersComponent) },
        { path: 'purchases-order-list', loadComponent: () => import('./features/purchases/purchase-orders/purchases-order-list/purchases-order-list.component').then(m => m.PurchasesOrderListComponent) }
      ]        
      },
      { path: 'debit-notes', loadComponent: () => import('./features/purchases/debit-notes/debit-notes.component').then(m => m.DebitNotesComponent),
      children: [
        { path: 'add-debit-notes', loadComponent: () => import('./features/purchases/debit-notes/add-debit-notes/add-debit-notes.component').then(m => m.AddDebitNotesComponent) },
        { path: 'edit-debit-notes', loadComponent: () => import('./features/purchases/debit-notes/edit-debit-notes/edit-debit-notes.component').then(m => m.EditDebitNotesComponent) },
        { path: 'debit-note-list', loadComponent: () => import('./features/purchases/debit-notes/debit-note-list/debit-note-list.component').then(m => m.DebitNoteListComponent) }
      ]        
      },
      { path: 'suppliers', loadComponent: () => import('./features/purchases/suppliers/suppliers.component').then(m => m.SuppliersComponent) },
      { path: 'supplier-payments', loadComponent: () => import('./features/purchases/supplier-payments/supplier-payments.component').then(m => m.SupplierPaymentsComponent) },

     //Finance
      { path: 'expense', loadComponent: () => import('./features/finance/expense/expense.component').then(m => m.ExpenseComponent) },
      { path: 'incomes', loadComponent: () => import('./features/finance/incomes/incomes.component').then(m => m.IncomesComponent) },
      { path: 'payments', loadComponent: () => import('./features/finance/payments/payments.component').then(m => m.PaymentsComponent) },
      { path: 'transactions', loadComponent: () => import('./features/finance/transactions/transactions.component').then(m => m.TransactionsComponent) },
      { path: 'bank-accounts', loadComponent: () => import('./features/finance/bank-accounts/bank-accounts.component').then(m => m.BankAccountsComponent),
        children:[
          { path: 'bank-accounts-type', loadComponent: () => import('./features/finance/bank-accounts/bank-accounts-type/bank-accounts-type.component').then(m => m.BankAccountsTypeComponent) },
          { path: 'bank-accounts-list', loadComponent: () => import('./features/finance/bank-accounts/bank-accounts-list/bank-accounts-list.component').then(m => m.BankAccountsListComponent) }
        ]
      },
      { path: 'money-transfer', loadComponent: () => import('./features/finance/money-transfer/money-transfer.component').then(m => m.MoneyTransferComponent) },

      //Manage
      { path: 'manage-users', loadComponent: () => import('./features/manage/manage-users/manage-users.component').then(m => m.ManageUsersComponent),
        children: [
          { path: 'users', loadComponent: () => import('./features/manage/manage-users/users/users.component').then(m => m.UsersComponent) },
          { path: 'roles-permissions', loadComponent: () => import('./features/manage/manage-users/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent) },
          { path: 'permission', loadComponent: () => import('./features/manage/manage-users/permission/permission.component').then(m => m.PermissionComponent) },
          { path: 'delete-account-request', loadComponent: () => import('./features/manage/manage-users/delete-account-request/delete-account-request.component').then(m => m.DeleteAccountRequestComponent) }
        ]          
      },
      { path: 'membership', loadComponent: () => import('./features/manage/membership/membership.component').then(m => m.MembershipComponent),
        children: [
          { path: 'membership-plans', loadComponent: () => import('./features/manage/membership/membership-plans/membership-plans.component').then(m => m.MembershipPlansComponent) },
          { path: 'membership-addons', loadComponent: () => import('./features/manage/membership/membership-addons/membership-addons.component').then(m => m.MembershipAddonsComponent) },
          { path: 'subscribers', loadComponent: () => import('./features/manage/membership/subscribers/subscribers.component').then(m => m.SubscribersComponent) },
          { path: 'membership-transactions', loadComponent: () => import('./features/manage/membership/membership-transactions/membership-transactions.component').then(m => m.MembershipTransactionsComponent) }
        ]          
      },
      { path: 'contact-messages', loadComponent: () => import('./features/manage/contact-messages/contact-messages.component').then(m => m.ContactMessagesComponent) },
      { path: 'tickets', loadComponent: () => import('./features/manage/tickets/tickets.component').then(m => m.TicketsComponent),
        children: [
          { path: 'ticket-list', loadComponent: () => import('./features/manage/tickets/tickets-list/tickets-list.component').then(m => m.TicketsListComponent) },
          { path: 'ticket-kanban', loadComponent: () => import('./features/manage/tickets/ticket-kanban/ticket-kanban.component').then(m => m.TicketKanbanComponent) },
          { path: 'ticket-details', loadComponent: () => import('./features/manage/tickets/ticket-details/ticket-details.component').then(m => m.TicketDetailsComponent) },
          { path: 'ticket-lists', loadComponent: () => import('./features/manage/tickets/ticket-lists/ticket-lists.component').then(m => m.TicketListsComponent) }
        ]          
      },
      
      //Reports
      { path: 'reports', loadComponent: () => import('./features/reports/reports.component').then((m) => m.ReportsComponent),
        children:[
          { path: 'item-report', loadComponent: () => import('./features/reports/item-report/item-report.component').then(m => m.ItemReportComponent),
            children:[
              { path: 'stock-summary', loadComponent: () => import('./features/reports/item-report/stock-summary/stock-summary.component').then(m => m.StockSummaryComponent) },
              { path: 'inventory-report', loadComponent: () => import('./features/reports/item-report/inventory-report/inventory-report.component').then(m => m.InventoryReportComponent) },
              { path: 'best-seller', loadComponent: () => import('./features/reports/item-report/best-seller/best-seller.component').then(m => m.BestSellerComponent) },
              { path: 'low-stock', loadComponent: () => import('./features/reports/item-report/low-stock/low-stock.component').then(m => m.LowStockComponent) },
              { path: 'stock-history', loadComponent: () => import('./features/reports/item-report/stock-history/stock-history.component').then(m => m.StockHistoryComponent) },
              { path: 'sold-stock', loadComponent: () => import('./features/reports/item-report/sold-stock/sold-stock.component').then(m => m.SoldStockComponent) },
            ]
          },
          { path: 'finance-reports', loadComponent: () => import('./features/reports/finance-reports/finance-reports.component').then(m => m.FinanceReportsComponent),
            children:[
              { path: 'payment-summary', loadComponent: () => import('./features/reports/finance-reports/payment-summary/payment-summary.component').then(m => m.PaymentSummaryComponent) },
              { path: 'tax-report', loadComponent: () => import('./features/reports/finance-reports/tax-report/tax-report.component').then(m => m.TaxReportComponent) },
          ]
          },
          { path: 'user-reports', loadComponent: () => import('./features/reports/user-reports/user-reports.component').then(m => m.UserReportsComponent),
            children:[
              { path: 'customer-due-reports', loadComponent: () => import('./features/reports/user-reports/customer-due-reports/customer-due-reports.component').then(m => m.CustomerDueReportsComponent) },
              { path: 'supplier-reports', loadComponent: () => import('./features/reports/user-reports/supplier-reports/supplier-reports.component').then(m => m.SupplierReportsComponent) },
              { path: 'customers-report', loadComponent: () => import('./features/reports/user-reports/customers-report/customers-report.component').then(m => m.CustomersReportComponent) },
            ]
          },
          { path: 'transaction-report', loadComponent: () => import('./features/reports/transaction-report/transaction-report.component').then(m => m.TransactionReportComponent),
            children:[
              { path: 'sales-report', loadComponent: () => import('./features/reports/transaction-report/sales-report/sales-report.component').then(m => m.SalesReportComponent) },
              { path: 'sales-returns', loadComponent: () => import('./features/reports/transaction-report/sales-returns/sales-returns.component').then(m => m.SalesReturnsComponent) },
              { path: 'sales-orders', loadComponent: () => import('./features/reports/transaction-report/sales-orders/sales-orders.component').then(m => m.SalesOrdersComponent) },
              { path: 'purchases-report', loadComponent: () => import('./features/reports/transaction-report/purchases-report/purchases-report.component').then(m => m.PurchasesReportComponent) },
              { path: 'purchase-return-report', loadComponent: () => import('./features/reports/transaction-report/purchase-return-report/purchase-return-report.component').then(m => m.PurchaseReturnReportComponent) },
              { path: 'quotation-report', loadComponent: () => import('./features/reports/transaction-report/quotation-report/quotation-report.component').then(m => m.QuotationReportComponent) }, 
              { path: 'purchase-orders-reports', loadComponent: () => import('./features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component').then(m => m.PurchaseOrdersReportsComponent) },
            ]
          },
          { path: 'accounting-report', loadComponent: () => import('./features/reports/accounting-report/accounting-report.component').then(m => m.AccountingReportComponent),
            children : [
              { path: 'expense-report', loadComponent: () => import('./features/reports/accounting-report/expense-report/expense-report.component').then(m => m.ExpenseReportComponent) },
              { path: 'income-report', loadComponent: () => import('./features/reports/accounting-report/income-report/income-report.component').then(m => m.IncomeReportComponent) },
              { path: 'profit-loss-report', loadComponent: () => import('./features/reports/accounting-report/profit-loss-report/profit-loss-report.component').then(m => m.ProfitLossReportComponent) },
              { path: 'annual-report', loadComponent: () => import('./features/reports/accounting-report/annual-report/annual-report.component').then(m => m.AnnualReportComponent) },
              { path: 'balance-sheet', loadComponent: () => import('./features/reports/accounting-report/balance-sheet/balance-sheet.component').then(m => m.BalanceSheetComponent) },
              { path: 'trial-balance', loadComponent: () => import('./features/reports/accounting-report/trial-balance/trial-balance.component').then(m => m.TrialBalanceComponent) },
              { path: 'cash-flow', loadComponent: () => import('./features/reports/accounting-report/cash-flow/cash-flow.component').then(m => m.CashFlowComponent) },
              { path: 'account-statement', loadComponent: () => import('./features/reports/accounting-report/account-statement/account-statement.component').then(m => m.AccountStatementComponent) },
            ]
          },
        ]
      },

      //Settings
      { path: 'settings', loadComponent:() => import('./features/setting/setting.component').then(m => SettingComponent),
        children: [
            { path: 'general-settings', loadComponent: () => import('./features/setting/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
            children:[
              { path:'account-settings', loadComponent: () => import('./features/setting/general-settings/account-settings/account-settings.component').then(m => m.AccountSettingsComponent),},
              { path: 'security-settings', loadComponent: () => import('./features/setting/general-settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
              { path: 'plans-billings', loadComponent: () => import('./features/setting/general-settings/plans-billings/plans-billings.component').then(m => m.PlansBillingsComponent) },
              { path: 'notifications-settings', loadComponent: () => import('./features/setting/general-settings/notifications-settings/notifications-settings.component').then(m => m.NotificationsSettingsComponent) },
              { path: 'integrations-settings', loadComponent: () => import('./features/setting/general-settings/integrations-settings/integrations-settings.component').then(m => m.IntegrationsSettingsComponent) },
            ]
            },
            { path: 'website-settings', loadComponent: () => import('./features/setting/website-settings/website-settings.component').then(m => m.WebsiteSettingsComponent),
            children:[
              { path: 'company-settings', loadComponent: () => import('./features/setting/website-settings/company-settings/company-settings.component').then(m => m.CompanySettingsComponent) },
              { path: 'localization-settings', loadComponent: () => import('./features/setting/website-settings/localization-settings/localization-settings.component').then(m => m.LocalizationSettingsComponent) },
              { path: 'prefixes-settings', loadComponent: () => import('./features/setting/website-settings/prefixes-settings/prefixes-settings.component').then(m => m.PrefixesSettingsComponent) },
              { path: 'preference-settings', loadComponent: () => import('./features/setting/website-settings/preference-settings/preference-settings.component').then(m => m.PreferenceSettingsComponent) },
              { path: 'seo-setup', loadComponent: () => import('./features/setting/website-settings/seo-setup/seo-setup.component').then(m => m.SeoSetupComponent) },
              { path: 'language-settings', loadComponent: () => import('./features/setting/website-settings/language-settings/language-settings.component').then(m => m.LanguageSettingsComponent) },
              { path: 'language-settings2', loadComponent: () => import('./features/setting/website-settings/language-settings2/language-settings2.component').then(m => m.LanguageSettings2Component) },
              { path: 'maintenance-mode', loadComponent: () => import('./features/setting/website-settings/maintenance-mode/maintenance-mode.component').then(m => m.MaintenanceModeComponent) },
              { path: 'authentication-settings', loadComponent: () => import('./features/setting/website-settings/authentication-settings/authentication-settings.component').then(m => m.AuthenticationSettingsComponent) },
              { path: 'ai-configuration-settings', loadComponent: () => import('./features/setting/website-settings/ai-configuration-settings/ai-configuration-settings.component').then(m => m.AiConfigurationSettingsComponent) },
              { path: 'appearance-settings', loadComponent: () => import('./features/setting/website-settings/appearance-settings/appearance-settings.component').then(m => m.AppearanceSettingsComponent) },
              { path: 'plugin-manager', loadComponent: () => import('./features/setting/website-settings/plugin-manager/plugin-manager.component').then(m => m.PluginManagerComponent) }, 
            ]
            },
            { path: 'app-settings', loadComponent: () => import('./features/setting/app-settings/app-settings.component').then(m => m.AppSettingsComponent),
            children:[
              { path: 'invoice-settings', loadComponent: () => import('./features/setting/app-settings/invoice-settings/invoice-settings.component').then(m => m.InvoiceSettingsComponent) },
              { path: 'invoice-templates', loadComponent: () => import('./features/setting/app-settings/invoice-templates/invoice-templates.component').then(m => m.InvoiceTemplatesComponent) },
              { path: 'esignatures', loadComponent: () => import('./features/setting/app-settings/esignatures/esignatures.component').then(m => m.EsignaturesComponent) },
              { path: 'barcode-settings', loadComponent: () => import('./features/setting/app-settings/barcode-settings/barcode-settings.component').then(m => m.BarcodeSettingsComponent) },
              { path: 'thermal-printer', loadComponent: () => import('./features/setting/app-settings/thermal-printer/thermal-printer.component').then(m => m.ThermalPrinterComponent) },
              { path: 'custom-fields', loadComponent: () => import('./features/setting/app-settings/custom-fields/custom-fields.component').then(m => m.CustomFieldsComponent) },
              { path: 'saas-settings', loadComponent: () => import('./features/setting/app-settings/saas-settings/saas-settings.component').then(m => m.SaasSettingsComponent) },
            ]
            },
            { path: 'finance-settings', loadComponent: () => import('./features/setting/finance-settings/finance-settings.component').then(m => m.FinanceSettingsComponent),
            children:[
              { path: 'payment-methods', loadComponent: () => import('./features/setting/finance-settings/payment-methods/payment-methods.component').then(m => m.PaymentMethodsComponent) },
              { path: 'bank-accounts-settings', loadComponent: () => import('./features/setting/finance-settings/bank-accounts-settings/bank-accounts-settings.component').then(m => m.BankAccountsSettingsComponent) },
              { path: 'tax-rates', loadComponent: () => import('./features/setting/finance-settings/tax-rates/tax-rates.component').then(m => m.TaxRatesComponent) },
              { path: 'currencies', loadComponent: () => import('./features/setting/finance-settings/currencies/currencies.component').then(m => m.CurrenciesComponent) }, 
            ]
            },
            { path: 'system-settings', loadComponent: () => import('./features/setting/system-settings/system-settings.component').then(m => m.SystemSettingsComponent),
            children:[
              { path: 'email-settings', loadComponent: () => import('./features/setting/system-settings/email-settings/email-settings.component').then(m => m.EmailSettingsComponent) },
              { path: 'email-templates', loadComponent: () => import('./features/setting/system-settings/email-templates/email-templates.component').then(m => m.EmailTemplatesComponent) },
              { path: 'sms-gateways', loadComponent: () => import('./features/setting/system-settings/sms-gateways/sms-gateways.component').then(m => m.SmsGatewaysComponent) },
              { path: 'gdpr-cookies', loadComponent: () => import('./features/setting/system-settings/gdpr-cookies/gdpr-cookies.component').then(m => m.GdprCookiesComponent) }, 
            ]
            },
            { path: 'other-settings', loadComponent: () => import('./features/setting/other-settings/other-settings.component').then(m => m.OtherSettingsComponent),
            children:[
              { path: 'custom-css', loadComponent: () => import('./features/setting/other-settings/custom-css/custom-css.component').then(m => m.CustomCssComponent) },
              { path: 'custom-js', loadComponent: () => import('./features/setting/other-settings/custom-js/custom-js.component').then(m => m.CustomJsComponent) },
              { path: 'sitemap', loadComponent: () => import('./features/setting/other-settings/sitemap/sitemap.component').then(m => m.SitemapComponent) },
              { path: 'clear-cache', loadComponent: () => import('./features/setting/other-settings/clear-cache/clear-cache.component').then(m => m.ClearCacheComponent) },
              { path: 'storage', loadComponent: () => import('./features/setting/other-settings/storage/storage.component').then(m => m.StorageComponent) },
              { path: 'cronjob', loadComponent: () => import('./features/setting/other-settings/cronjob/cronjob.component').then(m => m.CronjobComponent) },
              { path: 'system-backup', loadComponent: () => import('./features/setting/other-settings/system-backup/system-backup.component').then(m => m.SystemBackupComponent) },
              { path: 'database-backup', loadComponent: () => import('./features/setting/other-settings/database-backup/database-backup.component').then(m => m.DatabaseBackupComponent) },
              { path: 'system-update', loadComponent: () => import('./features/setting/other-settings/system-update/system-update.component').then(m => m.SystemUpdateComponent) }, 
            ]
            },
    
        ],
      },
      //Content
      { path: 'pages', loadComponent: () => import('./features/content/pages/pages.component').then(m => m.PagesComponent) },
      { path: 'blogs', loadComponent: () => import('./features/content/blogs/blogs.component').then(m => m.BlogsComponent),
        children: [
          { path: 'all-blogs', loadComponent: () => import('./features/content/blogs/all-blogs/all-blogs.component').then(m => m.AllBlogsComponent) },
          { path: 'blog-tags', loadComponent: () => import('./features/content/blogs/blog-tags/blog-tags.component').then(m => m.BlogTagsComponent) },
          { path: 'blog-categories', loadComponent: () => import('./features/content/blogs/blog-categories/blog-categories.component').then(m => m.BlogCategoriesComponent) },
          { path: 'blog-comments', loadComponent: () => import('./features/content/blogs/blog-comments/blog-comments.component').then(m => m.BlogCommentsComponent) },
          { path: 'add-blogs', loadComponent: () => import('./features/content/blogs/add-blogs/add-blogs.component').then(m => m.AddBlogsComponent) },
          { path: 'edit-blogs', loadComponent: () => import('./features/content/blogs/edit-blogs/edit-blogs.component').then(m => m.EditBlogsComponent) },
          { path: 'blog-details', loadComponent: () => import('./features/content/blogs/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) }
        ]            
      },
      { path: 'location', loadComponent: () => import('./features/content/location/location.component').then(m => m.LocationComponent),
        children: [
          { path: 'cities', loadComponent: () => import('./features/content/location/cities/cities.component').then(m => m.CitiesComponent) },
          { path: 'states', loadComponent: () => import('./features/content/location/states/states.component').then(m => m.StatesComponent) },
          { path: 'countries', loadComponent: () => import('./features/content/location/countries/countries.component').then(m => m.CountriesComponent) }
        ]            
      },
      { path: 'testimonials', loadComponent: () => import('./features/content/testimonials/testimonials.component').then(m => m.TestimonialsComponent) },
      { path: 'faq', loadComponent: () => import('./features/content/faq/faq.component').then(m => m.FaqComponent) },
        
      //pages
      { path: 'profile', loadComponent: () => import('./features/pages/profile/profile.component').then(m => m.ProfileComponent) },
      { path: 'starter', loadComponent: () => import('./features/pages/starter/starter.component').then(m => m.StarterComponent) },
      { path: 'gallery', loadComponent: () => import('./features/pages/gallery/gallery.component').then(m => m.GalleryComponent) },
      { path: 'pricing', loadComponent: () => import('./features/pages/pricing/pricing.component').then(m => m.PricingComponent) },
      { path: 'timeline', loadComponent: () => import('./features/pages/timeline/timeline.component').then(m => m.TimelineComponent) },
      { path: 'api-keys', loadComponent: () => import('./features/pages/api-keys/api-keys.component').then(m => m.ApiKeysComponent) },
      { path: 'privacy-policy', loadComponent: () => import('./features/pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
      { path: 'terms-condition', loadComponent: () => import('./features/pages/terms-condition/terms-condition.component').then(m => m.TermsConditionComponent) },

          
        
        
    
      //UI Interface
      { path: 'base-ui', loadComponent: () => import('./features/ui-interface/base-ui/base-ui.component').then(m => m.BaseUIComponent),
        children: [
          { path: 'alert', loadComponent: () => import('./features/ui-interface/base-ui/alerts/alerts.component').then(m => m.AlertsComponent) },
          { path: 'accordions', loadComponent: () => import('./features/ui-interface/base-ui/accordions/accordions.component').then(m => m.AccordionsComponent) },
          { path: 'avatar', loadComponent: () => import('./features/ui-interface/base-ui/avatar/avatar.component').then(m => m.AvatarComponent) },
          { path: 'badges', loadComponent: () => import('./features/ui-interface/base-ui/badges/badges.component').then(m => m.BadgesComponent) },
          { path: 'buttons', loadComponent: () => import('./features/ui-interface/base-ui/buttons/buttons.component').then(m => m.ButtonsComponent) },
          { path: 'button-group', loadComponent: () => import('./features/ui-interface/base-ui/button-group/button-group.component').then(m => m.ButtonGroupComponent) },
          { path: 'breadcrumb', loadComponent: () => import('./features/ui-interface/base-ui/breadcrumb/breadcrumb.component').then(m => m.BreadcrumbComponent) },
          { path: 'cards', loadComponent: () => import('./features/ui-interface/base-ui/cards/cards.component').then(m => m.CardsComponent) },
          { path: 'carousel', loadComponent: () => import('./features/ui-interface/base-ui/carousel/carousel.component').then(m => m.CarouselComponent) },
          { path: 'drop-down', loadComponent: () => import('./features/ui-interface/base-ui/dropdowns/dropdowns.component').then(m => m.DropdownsComponent) },
          { path: 'grid', loadComponent: () => import('./features/ui-interface/base-ui/grid/grid.component').then(m => m.GridComponent) },
          { path: 'images', loadComponent: () => import('./features/ui-interface/base-ui/images/images.component').then(m => m.ImagesComponent) },
          { path: 'modal', loadComponent: () => import('./features/ui-interface/base-ui/modals/modals.component').then(m => m.ModalsComponent) },
          { path: 'offcanvas', loadComponent: () => import('./features/ui-interface/base-ui/offcanvas/offcanvas.component').then(m => m.OffcanvasComponent) },
          { path: 'pagination', loadComponent: () => import('./features/ui-interface/base-ui/pagination/pagination.component').then(m => m.PaginationComponent) },
          { path: 'placeholder', loadComponent: () => import('./features/ui-interface/base-ui/placeholders/placeholders.component').then(m => m.PlaceholdersComponent) },
          { path: 'popover', loadComponent: () => import('./features/ui-interface/base-ui/popover/popover.component').then(m => m.PopoverComponent) },
          { path: 'progress-bars', loadComponent: () => import('./features/ui-interface/base-ui/progress-bars/progress-bars.component').then(m => m.ProgressBarsComponent) },
          { path: 'spinner', loadComponent: () => import('./features/ui-interface/base-ui/spinner/spinner.component').then(m => m.SpinnerComponent) },
          { path: 'tabs', loadComponent: () => import('./features/ui-interface/base-ui/tabs/tabs.component').then(m => m.TabsComponent) },
          { path: 'toasts', loadComponent: () => import('./features/ui-interface/base-ui/toasts/toasts.component').then(m => m.ToastsComponent) },
          { path: 'tooltip', loadComponent: () => import('./features/ui-interface/base-ui/tooltip/tooltip.component').then(m => m.TooltipComponent) },
          { path: 'typography', loadComponent: () => import('./features/ui-interface/base-ui/typography/typography.component').then(m => m.TypographyComponent) },
          { path: 'collapse', loadComponent: () => import('./features/ui-interface/base-ui/collapse/collapse.component').then(m => m.CollapseComponent) },
          { path: 'ratio', loadComponent: () => import('./features/ui-interface/base-ui/ratio/ratio.component').then(m => m.RatioComponent) },
          { path: 'links', loadComponent: () => import('./features/ui-interface/base-ui/links/links.component').then(m => m.LinksComponent) },
          { path: 'list-group', loadComponent: () => import('./features/ui-interface/base-ui/list-group/list-group.component').then(m => m.ListGroupComponent) },
          { path: 'utilities', loadComponent: () => import('./features/ui-interface/base-ui/utlities/utlities.component').then(m => m.UtlitiesComponent) },
        ]        
      },
      { path: 'advanced-ui', loadComponent: () => import('./features/ui-interface/advanced-ui/advanced-ui.component').then(m => m.AdvancedUiComponent),
        children: [
          { path: 'clipboards', loadComponent: () => import('./features/ui-interface/advanced-ui/clipboards/clipboards.component').then(m => m.ClipboardsComponent) },
          { path: 'drag-drop', loadComponent: () => import('./features/ui-interface/advanced-ui/drap-drop/drap-drop.component').then(m => m.DrapDropComponent) },
          { path: 'rating', loadComponent: () => import('./features/ui-interface/advanced-ui/rating/rating.component').then(m => m.RatingComponent) },
          { path: 'text-editor', loadComponent: () => import('./features/ui-interface/advanced-ui/text-editor/text-editor.component').then(m => m.TextEditorComponent) },
          { path: 'counter', loadComponent: () => import('./features/ui-interface/advanced-ui/counter/counter.component').then(m => m.CounterComponent) },
          { path: 'scrollbar', loadComponent: () => import('./features/ui-interface/advanced-ui/scrollbar/scrollbar.component').then(m => m.ScrollbarComponent) },
          { path: 'light-box', loadComponent: () => import('./features/ui-interface/advanced-ui/lightbox/lightbox.component').then(m => m.LightboxComponent) },
          { path: 'range-slider', loadComponent: () => import('./features/ui-interface/advanced-ui/rangeslider/rangeslider.component').then(m => m.RangesliderComponent) },
        ]
      },
      { path: 'maps', loadComponent: () => import('./features/ui-interface/maps/maps.component').then(m => m.MapsComponent),
        children:[
          { path: 'leaflets', loadComponent: () => import('./features/ui-interface/maps/leaflet/leaflet.component').then(m => m.LeafletComponent) }
        ]
      },
      { path: 'tables', loadComponent: () => import('./features/ui-interface/tables/tables.component').then(m => m.TablesComponent),
        children: [
          { path: 'data-table', loadComponent: () => import('./features/ui-interface/tables/data-tables/data-tables.component').then(m => m.DataTablesComponent) },
          { path: 'basic', loadComponent: () => import('./features/ui-interface/tables/basic-tables/basic-tables.component').then(m => m.BasicTablesComponent) },
        ]
      },
      { path: 'icon', loadComponent: () => import('./features/ui-interface/icon/icon.component').then(m => m.IconComponent),
        children: [
          { path: 'fontawesome', loadComponent: () => import('./features/ui-interface/icon/fontawesome/fontawesome.component').then(m => m.FontawesomeComponent) },
          { path: 'feather', loadComponent: () => import('./features/ui-interface/icon/feathers/feathers.component').then(m => m.FeathersComponent) },
          { path: 'ionic', loadComponent: () => import('./features/ui-interface/icon/ionic/ionic.component').then(m => m.IonicComponent) },
          { path: 'material', loadComponent: () => import('./features/ui-interface/icon/material/material.component').then(m => m.MaterialComponent) },
          { path: 'pe7', loadComponent: () => import('./features/ui-interface/icon/pe7/pe7.component').then(m => m.Pe7Component) },
          { path: 'simple-line', loadComponent: () => import('./features/ui-interface/icon/simpline/simpline.component').then(m => m.SimplineComponent) },
          { path: 'themify', loadComponent: () => import('./features/ui-interface/icon/themify/themify.component').then(m => m.ThemifyComponent) },
          { path: 'typicon', loadComponent: () => import('./features/ui-interface/icon/typicon/typicon.component').then(m => m.TypiconComponent) },
          { path: 'weather', loadComponent: () => import('./features/ui-interface/icon/weather/weather.component').then(m => m.WeatherComponent) },
          { path: 'flag', loadComponent: () => import('./features/ui-interface/icon/flag/flag.component').then(m => m.FlagComponent) },
        ]        
      },
      { path: 'forms', loadComponent: () => import('./features/ui-interface/forms/forms.component').then(m => m.FormsComponent),
        children: [
          { path: 'basic-inputs', loadComponent: () => import('./features/ui-interface/forms/basic-inputs/basic-inputs.component').then(m => m.BasicInputsComponent) },
          { path: 'horizontal-form', loadComponent: () => import('./features/ui-interface/forms/horizontal-form/horizontal-form.component').then(m => m.HorizontalFormComponent) },
          { path: 'vertical-form', loadComponent: () => import('./features/ui-interface/forms/vertical-form/vertical-form.component').then(m => m.VerticalFormComponent) },
          { path: 'form-mask', loadComponent: () => import('./features/ui-interface/forms/form-mask/form-mask.component').then(m => m.FormMaskComponent) },
          { path: 'form-validation', loadComponent: () => import('./features/ui-interface/forms/form-validation/form-validation.component').then(m => m.FormValidationComponent) },
          { path: 'input-groups', loadComponent: () => import('./features/ui-interface/forms/input-groups/input-groups.component').then(m => m.InputGroupsComponent) },
          { path: 'file-upload', loadComponent: () => import('./features/ui-interface/forms/form-fileupload/form-fileupload.component').then(m => m.FormFileuploadComponent) },
          { path: 'form-checkbox-radios', loadComponent: () => import('./features/ui-interface/forms/form-checkbox-radios/form-checkbox-radios.component').then(m => m.FormCheckboxRadiosComponent) },
          { path: 'form-grid-gutters', loadComponent: () => import('./features/ui-interface/forms/form-grid-gutters/form-grid-gutters.component').then(m => m.FormGridGuttersComponent) },
          { path: 'form-pickers', loadComponent: () => import('./features/ui-interface/forms/form-pickers/form-pickers.component').then(m => m.FormPickersComponent) },
        ]        
      },
      { path: 'chart', loadComponent: () => import('./features/ui-interface/charts/charts.component').then(m => m.ChartsComponent),
        children: [
          { path: 'apex-charts', loadComponent: () => import('./features/ui-interface/charts/apexcharts/apexcharts.component').then(m => m.ApexchartsComponent) },
          { path: 'prime-ng', loadComponent: () => import('./features/ui-interface/charts/prime-ng/prime-ng.component').then(m => m.PrimeNgComponent) },
        ]
      },

      //Layout
        { path: 'layout-default', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-single', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-rtl', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-mini', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-transparent', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-without-header', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-boxed', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'layout-dark', loadComponent: () => import('./features/dashboard/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        { path: 'notifications', loadComponent: () => import('./features/notifications/notifications.component').then(m => m.NotificationsComponent) }
      
      


    ]
  },
  { path: 'invoice-modals',  loadComponent: () => import('./features/invoice-modals/invoice-modals.component').then(m => m.InvoiceModalsComponent),
    children:[
      { path: 'general-invoice-1', loadComponent: () => import('./features/invoice-modals/general-invoice-1/general-invoice-1.component').then(m => m.GeneralInvoice1Component) },
      { path: 'general-invoice-2', loadComponent: () => import('./features/invoice-modals/general-invoice-2/general-invoice-2.component').then(m => m.GeneralInvoice2Component) },
      { path: 'general-invoice-3', loadComponent: () => import('./features/invoice-modals/general-invoice-3/general-invoice-3.component').then(m => m.GeneralInvoice3Component) },
      { path: 'general-invoice-4', loadComponent: () => import('./features/invoice-modals/general-invoice-4/general-invoice-4.component').then(m => m.GeneralInvoice4Component) },
      { path: 'general-invoice-5', loadComponent: () => import('./features/invoice-modals/general-invoice-5/general-invoice-5.component').then(m => m.GeneralInvoice5Component) },
      { path: 'general-invoice-6', loadComponent: () => import('./features/invoice-modals/general-invoice-6/general-invoice-6.component').then(m => m.GeneralInvoice6Component) },
      { path: 'general-invoice-7', loadComponent: () => import('./features/invoice-modals/general-invoice-7/general-invoice-7.component').then(m => m.GeneralInvoice7Component) },
      { path: 'general-invoice-8', loadComponent: () => import('./features/invoice-modals/general-invoice-8/general-invoice-8.component').then(m => m.GeneralInvoice8Component) },
      { path: 'general-invoice-9', loadComponent: () => import('./features/invoice-modals/general-invoice-9/general-invoice-9.component').then(m => m.GeneralInvoice9Component) },
      { path: 'general-invoice-10', loadComponent: () => import('./features/invoice-modals/general-invoice-10/general-invoice-10.component').then(m => m.GeneralInvoice10Component) }, 
      { path: 'bus-booking-invoice', loadComponent: () => import('./features/invoice-modals/bus-booking-invoice/bus-booking-invoice.component').then(m => m.BusBookingInvoiceComponent) },
      { path: 'car-booking-invoice', loadComponent: () => import('./features/invoice-modals/car-booking-invoice/car-booking-invoice.component').then(m => m.CarBookingInvoiceComponent) },
      { path: 'coffee-shop-invoice', loadComponent: () => import('./features/invoice-modals/coffee-shop-invoice/coffee-shop-invoice.component').then(m => m.CoffeeShopInvoiceComponent) },
      { path: 'domain-hosting-invoice', loadComponent: () => import('./features/invoice-modals/domain-hosting-invoice/domain-hosting-invoice.component').then(m => m.DomainHostingInvoiceComponent) },
      { path: 'ecommerce-invoice', loadComponent: () => import('./features/invoice-modals/ecommerce-invoice/ecommerce-invoice.component').then(m => m.EcommerceInvoiceComponent) },
      { path: 'fitness-center-invoice', loadComponent: () => import('./features/invoice-modals/fitness-center-invoice/fitness-center-invoice.component').then(m => m.FitnessCenterInvoiceComponent) },
      { path: 'flight-booking-invoice', loadComponent: () => import('./features/invoice-modals/flight-booking-invoice/flight-booking-invoice.component').then(m => m.FlightBookingInvoiceComponent) },
      { path: 'hotel-booking-invoice', loadComponent: () => import('./features/invoice-modals/hotel-booking-invoice/hotel-booking-invoice.component').then(m => m.HotelBookingInvoiceComponent) },
      { path: 'internet-billing-invoice', loadComponent: () => import('./features/invoice-modals/internet-billing-invoice/internet-billing-invoice.component').then(m => m.InternetBillingInvoiceComponent) },
      { path: 'invoice-medical', loadComponent: () => import('./features/invoice-modals/invoice-medical/invoice-medical.component').then(m => m.InvoiceMedicalComponent) },
      { path: 'money-exchange-invoice', loadComponent: () => import('./features/invoice-modals/money-exchange-invoice/money-exchange-invoice.component').then(m => m.MoneyExchangeInvoiceComponent) },
      { path: 'movie-ticket-booking-invoice', loadComponent: () => import('./features/invoice-modals/movie-ticket-booking-invoice/movie-ticket-booking-invoice.component').then(m => m.MovieTicketBookingInvoiceComponent) },
      { path: 'restaurants-invoice', loadComponent: () => import('./features/invoice-modals/restaurants-invoice/restaurants-invoice.component').then(m => m.RestaurantsInvoiceComponent) },
      { path: 'student-billing-invoice', loadComponent: () => import('./features/invoice-modals/student-billing-invoice/student-billing-invoice.component').then(m => m.StudentBillingInvoiceComponent) },
      { path: 'train-ticket-invoice', loadComponent: () => import('./features/invoice-modals/train-ticket-invoice/train-ticket-invoice.component').then(m => m.TrainTicketInvoiceComponent) },
      { path: 'receipt-invoice-1', loadComponent: () => import('./features/invoice-modals/receipt-invoice-1/receipt-invoice-1.component').then(m => m.ReceiptInvoice1Component) },
      { path: 'receipt-invoice-2', loadComponent: () => import('./features/invoice-modals/receipt-invoice-2/receipt-invoice-2.component').then(m => m.ReceiptInvoice2Component) },
      { path: 'receipt-invoice-3', loadComponent: () => import('./features/invoice-modals/receipt-invoice-3/receipt-invoice-3.component').then(m => m.ReceiptInvoice3Component) },
      { path: 'receipt-invoice-', loadComponent: () => import('./features/invoice-modals/receipt-invoice-4/receipt-invoice-4.component').then(m => m.ReceiptInvoice4Component) },
    ]
   },
  { path: 'coming-soon', loadComponent: () => import ('./features/pages/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),},
  { path: 'under-maintenance', loadComponent: () => import('./features/pages/under-maintenance/under-maintenance.component').then( (m) => m.UnderMaintenanceComponent)},
  { path: 'under-construction', loadComponent: () => import('./features/pages/under-construction/under-construction.component').then((m) => m.UnderConstructionComponent)},
  { path:'error',loadComponent: () => import('./error/error.component').then((m) =>m.ErrorComponent),
    children:[
      { path: 'error-404', loadComponent: () => import('./error/error-404/error-404.component').then( (m) => m.Error404Component)},
      { path: 'error-500', loadComponent: () => import('./error/error-500/error-500.component').then((m) => m.Error500Component)},
    ]
  },
  {
    path:'**',
    redirectTo:'/error/error-404',
    pathMatch:'full'
  }

]as const;
