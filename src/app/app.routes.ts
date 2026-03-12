import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
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
