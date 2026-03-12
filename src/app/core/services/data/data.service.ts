 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { routes } from '../../core.index';
import { SideBar, SideBarData, SideBarMenu, apiResultFormat ,breadCrumbData} from '../../models/models';
import { Base } from 'primeng/base';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getEvents() {
    return this.http
      .get<apiResultFormat>('assets/JSON/scheduleevents.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getCustomers() {
    return this.http.get<apiResultFormat>('assets/JSON/customers.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getActive() {
    return this.http
      .get<apiResultFormat>('assets/JSON/activecustomer.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDeactive() {
    return this.http
      .get<apiResultFormat>('assets/JSON/deactivecustomer.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getBlogs() {
    return this.http.get<apiResultFormat>('assets/JSON/blogs.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getBlogCategories() {
    return this.http.get<apiResultFormat>('assets/JSON/categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBlogTag() {
    return this.http.get<apiResultFormat>('assets/JSON/blogtag.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getBlogComment() {
    return this.http.get<apiResultFormat>('assets/JSON/blogcomment.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }




  public getExpensesList() {
    return this.http.get<apiResultFormat>('assets/JSON/expenses.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPaymentList() {
    return this.http.get<apiResultFormat>('assets/JSON/payments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoiceItem() {
    return this.http.get<apiResultFormat>('assets/JSON/itemList.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getEstimatesList() {
    return this.http.get<apiResultFormat>('assets/JSON/estimates.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getTicketList() {
    return this.http.get<apiResultFormat>('assets/JSON/ticket.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketopenList() {
    return this.http.get<apiResultFormat>('assets/JSON/ticket.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketPending() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketsPending.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketOpen() {
    return this.http.get<apiResultFormat>('assets/JSON/ticketsopen.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketresolved() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketsresolved.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketOverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketsOverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketclosed() {
    return this.http.get<apiResultFormat>('assets/JSON/ticketclosed.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTicketCancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketCancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketRecurring() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketrecurring.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCountries() {
    return this.http.get<apiResultFormat>('assets/JSON/countries.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getbankaccount() {
    return this.http.get<apiResultFormat>('assets/JSON/bankaccount.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCities() {
    return this.http.get<apiResultFormat>('assets/JSON/city.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDeliverychallan() {
    return this.http
      .get<apiResultFormat>('assets/JSON/deliverychallens.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMessages() {
    return this.http.get<apiResultFormat>('assets/JSON/message.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getFaq() {
    return this.http.get<apiResultFormat>('assets/JSON/faq.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTestimonials() {
    return this.http.get<apiResultFormat>('assets/JSON/testimonials.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getVendors() {
    return this.http.get<apiResultFormat>('assets/JSON/vendors.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getLedger() {
    return this.http.get<apiResultFormat>('assets/JSON/ledger.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public recurringinvoice() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringinvoice.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurringPending() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringpending.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurringOverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringoverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurring() {
    return this.http.get<apiResultFormat>('assets/JSON/recurring.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public recurringCancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringcancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public recurringDraft() {
    return this.http
      .get<apiResultFormat>('assets/JSON/recurringdraft.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUnits() {
    return this.http.get<apiResultFormat>('assets/JSON/units.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCategory() {
    return this.http.get<apiResultFormat>('assets/JSON/category.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProductlist() {
    return this.http.get<apiResultFormat>('assets/JSON/productlist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getcreditnotes() {
    return this.http.get<apiResultFormat>('assets/JSON/creditnotes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getEditcreditnotes() {
    return this.http
      .get<apiResultFormat>('assets/JSON/editcreditnotes.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotespending() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotespending.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotesoverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotesoverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotesdraft() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotesdraft.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnoterecurring() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotesrecurring.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCreditnotecancel() {
    return this.http
      .get<apiResultFormat>('assets/JSON/creditnotescancel.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinvoice() {
    return this.http.get<apiResultFormat>('assets/JSON/invoice.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoicepaid() {
    return this.http.get<apiResultFormat>('assets/JSON/invoicepaid.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoiceoverdue() {
    return this.http
      .get<apiResultFormat>('assets/JSON/invoiceoverdue.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }

  public getinvoicedraft() {
    return this.http.get<apiResultFormat>('assets/JSON/invoicedraft.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoicerecurring() {
    return this.http
      .get<apiResultFormat>('assets/JSON/invoicerecurring.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinvoicecancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/invoicecancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getinventory() {
    return this.http.get<apiResultFormat>('assets/JSON/inventory.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpurchase() {
    return this.http.get<apiResultFormat>('assets/JSON/purchase.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpurchaseorder() {
    return this.http
      .get<apiResultFormat>('assets/JSON/purchaseorder.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getdebitnotes() {
    return this.http.get<apiResultFormat>('assets/JSON/debitnotes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getquotation() {
    return this.http.get<apiResultFormat>('assets/JSON/quotations.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpaymentsummary() {
    return this.http
      .get<apiResultFormat>('assets/JSON/paymentsummary.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSubscribers() {
    return this.http.get<apiResultFormat>('assets/JSON/subscribers.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTransaction() {
    return this.http.get<apiResultFormat>('assets/JSON/transactions.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getrole() {
    return this.http.get<apiResultFormat>('assets/JSON/role.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getdeleteaccount() {
    return this.http
      .get<apiResultFormat>('assets/JSON/deleteaccount.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUsers() {
    return this.http.get<apiResultFormat>('assets/JSON/user.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getaddpages() {
    return this.http.get<apiResultFormat>('assets/JSON/addpages.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getstates() {
    return this.http.get<apiResultFormat>('assets/JSON/states.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getsignature() {
    return this.http.get<apiResultFormat>('assets/JSON/signature.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getinvoiceone() {
    return this.http.get<apiResultFormat>('assets/JSON/invoiceone.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getCompanies() {
    return this.http.get<apiResultFormat>('assets/JSON/companies.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPackages() {
    return this.http.get<apiResultFormat>('assets/JSON/packages.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }



  public getSubscription() {
    return this.http.get<apiResultFormat>('assets/JSON/subscription.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getDomainRequest() {
    return this.http
      .get<apiResultFormat>('assets/JSON/domain-request.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDomain() {
    return this.http.get<apiResultFormat>('assets/JSON/domain.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPurchaseTransaction() {
    return this.http
      .get<apiResultFormat>('assets/JSON/purchase-transaction.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTaxPurchase() {
    return this.http.get<apiResultFormat>('assets/JSON/tax-purchase.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTaxPurchase2() {
    return this.http.get<apiResultFormat>('assets/JSON/tax-purchase2.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getPlanBilling() {
    return this.http
      .get<apiResultFormat>('assets/JSON/plan-billing.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomField() {
    return this.http
      .get<apiResultFormat>('assets/JSON/custom-field.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInventoryHistory() {
    return this.http
      .get<apiResultFormat>('assets/JSON/inventory-history.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDataTables() {
    return this.http
      .get<apiResultFormat>('assets/JSON/data-tables.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPlansList() {
    return this.http
      .get<apiResultFormat>('assets/JSON/plans-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSupplierPayment() {
    return this.http
      .get<apiResultFormat>('assets/JSON/supplier-payment.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getIncome() {
    return this.http
      .get<apiResultFormat>('assets/JSON/income.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMoneyTransfer() {
    return this.http
      .get<apiResultFormat>('assets/JSON/money-transfer.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBankAccountType() {
    return this.http
      .get<apiResultFormat>('assets/JSON/bank-account-type.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMembershipAddons() {
    return this.http
      .get<apiResultFormat>('assets/JSON/membership-addons.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMembershipTransaction() {
    return this.http
      .get<apiResultFormat>('assets/JSON/membership-transaction.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getContactMessage() {
    return this.http
      .get<apiResultFormat>('assets/JSON/contact-message.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTicketLists() {
    return this.http
      .get<apiResultFormat>('assets/JSON/ticketlists.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStockSummary() {
    return this.http.get<apiResultFormat>('assets/JSON/stock-summary.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExpensereport() {
    return this.http.get<apiResultFormat>('assets/JSON/expense-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBalancesheet() {
    return this.http.get<apiResultFormat>('assets/JSON/balance-sheet.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTrialbalance() {
    return this.http.get<apiResultFormat>('assets/JSON/trial-balance.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCashflow() {
    return this.http.get<apiResultFormat>('assets/JSON/cash-flow.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAccountstatement() {
    return this.http.get<apiResultFormat>('assets/JSON/account-statement.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getIncomereport() {
    return this.http.get<apiResultFormat>('assets/JSON/income-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInventoryReport() {
    return this.http.get<apiResultFormat>('assets/JSON/inventory-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getBestSeller() {
    return this.http.get<apiResultFormat>('assets/JSON/best-seller.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getLowStock() {
    return this.http.get<apiResultFormat>('assets/JSON/low-stock.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSoldStock() {
    return this.http.get<apiResultFormat>('assets/JSON/sold-stock.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getStockHistory() {
    return this.http.get<apiResultFormat>('assets/JSON/stock-history.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPaymentSummary() {
    return this.http.get<apiResultFormat>('assets/JSON/payment-summary.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTaxReport() {
    return this.http.get<apiResultFormat>('assets/JSON/tax-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getRecurringinvoices() {
    return this.http.get<apiResultFormat>('assets/JSON/recurring.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomertransaction() {
    return this.http.get<apiResultFormat>('assets/JSON/customer-transactions.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomerInvoicereport() {
    return this.http.get<apiResultFormat>('assets/JSON/customer-invoice-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomerReport() {
    return this.http.get<apiResultFormat>('assets/JSON/customer-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCustomerDueReport() {
    return this.http.get<apiResultFormat>('assets/JSON/customer-due-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSupplier() {
    return this.http.get<apiResultFormat>('assets/JSON/supplier.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPages() {
    return this.http.get<apiResultFormat>('assets/JSON/pages.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSalesReport() {
    return this.http.get<apiResultFormat>('assets/JSON/sales-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSalesReturnReport() {
    return this.http.get<apiResultFormat>('assets/JSON/salesreturn-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSalesOrderReport() {
    return this.http.get<apiResultFormat>('assets/JSON/salesorder.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPurchaseReport() {
    return this.http.get<apiResultFormat>('assets/JSON/purchase-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPurchaseReturnReport() {
    return this.http.get<apiResultFormat>('assets/JSON/purchasereturn-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getQuotationReport() {
    return this.http.get<apiResultFormat>('assets/JSON/quotation-report.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getContacts() {
    return this.http.get<apiResultFormat>('assets/JSON/contacts.json')
      .pipe(map((res: apiResultFormat) => {
          return res;
        })
      );
  }
   
// eslint-disable-next-line @typescript-eslint/no-explicit-any
public sideBar: any[] = [
  {
    tittle: 'Main',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    showSubRoute:true,
    menu: [
      {
        menuValue: 'Dashboard',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'element-45',
        base: 'index',
        base1:'admin-dashboard',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Admin Dashboard',
            tittle: 'Admin Dashboard',
            route: routes.index,
            icon: 'home',
            base:'index',
            showAsTab: false,
            activeMenu:''
          },
          {
            separateRoute: true,
            menuValue: 'Admin Dashboard 2',
            tittle: 'Admin Dashboard 2',
            route: routes.AdminDashboard2,
            icon: 'home',
            base:'admin-dashboard',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Customer Dashboard',
            tittle: 'Customer Dashboard',
            route: routes.customerDashboard,
            base: routes.index,
            icon: 'home',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Super Admin Dashboard',
            tittle: 'Super Admin Dashboard',
            route: routes.superAdminDashboard,
            base: 'super-admin',
            icon: 'home',
            showAsTab: false,
          },
        ],
      },
      {
        menuValue: 'Super Admin',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'shapes5',
        base: 'super-admin',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Dashboard',
            route: routes.superAdminDashboard,
            base: routes.superAdminDashboard,
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Companies',
            route: routes.companies,
            base: routes.companies,
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Subscriptions',
            route: routes.subscriptions,
            base: routes.subscriptions,
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Packages',
            route: routes.packages,
            base: routes.packages,
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Domain',
            route: routes.domain,
            base: routes.domain,
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Purchase Transaction',
            route: routes.purchaseTransaction,
            base: routes.purchaseTransaction,
            showAsTab: false,
          },
        ],
      },
      {
        menuValue: 'Applications',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'category-25',
        base: 'application',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Chat',
            tittle: 'Chat',
            route: routes.chat,
            base: routes.chat,
            showAsTab: false,
          },
          {
            menuValue: 'Calls',  
            hasSubRouteTwo2: true,
            showSubRoute: false,
            page:'calls',
            icon:'document',
            subMenus: [
              {
                menuValue: 'Voice Call',
                route: routes.voiceCall,
                base: 'voice-call',
              },
              {
                menuValue: 'video Call',
                route: routes.videoCall,
                base: 'video-call',
              },
              {
                menuValue: 'Outgoing Call',
                route: routes.outgoingCall,
                base: 'outgoing-call',
              },
              {
                menuValue: 'Incoming Call',
                route: routes.incomingCall,
                base: 'incoming-call',
              },
              {
                menuValue: 'Call History',
                route: routes.callHistory,
                base: 'call-history',
              },
            ]
          },
          {
            separateRoute: true,
            menuValue: 'Calendar',
            tittle: 'Calendar',
            route: routes.calender,
            base: routes.calender,
            icon: 'calendar',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Email',
            tittle: 'Email',
            route: routes.email,
            base: routes.email,
            icon: 'mail',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'To Do',
            route: routes.todo,
            base: 'todo',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Notes',
            route: routes.notes,
            base: 'notes',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Social Feed',
            route: routes.socialFeed,
            base: 'social-feed',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'File Manager',
            route: routes.fileManager,
            base: 'file-manager',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Kanban',
            route: routes.kanbanView,
            base: 'kanban-view',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Contacts',
            route: routes.contacts,
            base: 'contacts',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Invoices',
            route: routes.applicationInvoice,
            base: 'invoice',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Search List',
            route: routes.searchList,
            base: 'search-list',
            showAsTab: false,
          },
        ],
      },
      
    ],
  },
  
  {
    tittle: 'Inventory & Sales' ,
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Products / Services',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'box5',
        base: 'product-service',
        subMenus: [
          {
            menuValue: 'Product List',
            route: routes.productlist,
            base: 'product-list',
            base1: 'add-products',
            base2: 'edit-products',
          },
          {
            menuValue: 'Category',
            route: routes.category,
            base: 'category',
          },
          {
            menuValue: 'Units',
            route: routes.units,
            base: 'units',
          },
        ],
      },
      {
        menuValue: 'Inventory',
        route: routes.allInventory,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'lifebuoy5',
        base: 'inventory',
        subMenus: [],
      },
      {
        menuValue: 'Invoice',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'receipt-item5',
        base: 'invoices',
        subMenus: [
          {
            menuValue: 'Invoices',
            route: routes.invoiceList,
            base: 'invoices',
          },
          {
            menuValue: 'Create Invoice',
            route: routes.addInvoice,
            base: 'add-invoice',
          },
          {
            menuValue: 'Invoice Details',
            route: routes.invoiceDetails,
            base: 'invoice-details',
          },
          {
            menuValue: 'Invoice Templates',
            route: routes.invoiceTemplate,
            base: 'invoice-templates',
          },
          {
            menuValue: 'Recurring Invoices',
            route: routes.recurringInvoices,
            base: 'recurring-invoices',
          },
        ],
      },
      {
        menuValue: 'Credit Notes',
        route: routes.creditNotes,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'note5',
        base: 'credit-notes',
        subMenus: [],
      },
      {
        menuValue: 'Quotations',
        route: routes.quotationList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'strongbox5',
        base: 'quotations',
        subMenus: [],
      },
      {
        menuValue: 'Delivery Challans',
        route: routes.deliveryChallanList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'bookmark-25',
        base: 'delivery-challans',
        subMenus: [],
      },
      {
        menuValue: 'Customers',
        view:false,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'profile-2user5',
        base: 'customers',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Customers',
            route: routes.customerList,
            base: 'customer-list',
            icon: 'clipboard',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Customer Details',
            route: routes.customerDetails,
            base: 'customer-details',
            icon: 'box',
            showAsTab: false,
          },
        ],
      },
    ],
  },

  {
    tittle: 'Purchases',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Purchases',
        route: routes.purchaseList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'bag-tick-25',
        base: 'purchases',
        subMenus: [],
      },
      {
        menuValue: 'Purchase Orders',
        route: routes.purchaseOrderList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-forward5',
        base: 'purchase-orders',
        subMenus: [],
      },
      {
        menuValue: 'Debit Notes',
        route: routes.debitNoteList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-text5',
        base: 'debit-notes',
        subMenus: [],
      },
      {
        menuValue: 'Suppliers',
        route: routes.suppliers,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'security-user5',
        base: 'suppliers',
        subMenus: [],
      },
      {
        menuValue: 'Supplier Payments',
        route: routes.supplierPayments,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'coin-15',
        base: 'supplier-payments',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'Finance & Accounts',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Expenses',
        route: routes.expenses,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'money-send5',
        base: 'expense',
        subMenus: [],
      },
      {
        menuValue: 'Incomes',
        route: routes.incomes,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'money-send5',
        base: 'incomes',
        subMenus: [],
      },
      {
        menuValue: 'Payments',
        route: routes.payments,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'money-tick5',
        base: 'payments',
        subMenus: [],
      },
      {
        menuValue: 'Transactions',
        route: routes.transactions,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'moneys5',
        base: 'transactions',
        subMenus: [],
      },
      {
        menuValue: 'Bank Accounts',
        route: routes.bankAccountList,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'card-tick-15',
        base: 'bank-accounts',
        subMenus: [],
      },
      {
        menuValue: 'Money Transfer',
        route: routes.moneyTransfer,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'convert-card5',
        base: 'money-transfer',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'Manage',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Manage User',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'profile-2user5',
        base: 'manage-users',
        subMenus: [
          {
            menuValue: 'Users',
            route: routes.users,
            base: 'users',
          },
          {
            menuValue: 'Roles & Permission',
            route: routes.rolesPermissions,
            base: 'roles-permission',
          },
          {
            menuValue: 'Delect Account Request',
            route: routes.deleteAccountRequest,
            base: 'delete-account-request',
          },
        ],
      },
      {
        menuValue: 'Membership',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'star-15',
        base: 'membership',
        subMenus: [
          {
            menuValue: 'Membership Plans',
            route: routes.membershipPlans,
            base: 'membership-plans',
          },
          {
            menuValue: 'Membership Addons',
            route: routes.membershipAddons,
            base: 'membership-addons',
          },
          {
            menuValue: 'Subscribers',
            route: routes.subscribers,
            base: 'subscribers',
          },
          {
            menuValue: 'Transactions',
            route: routes.membershipTransactions,
            base: 'transactions',
          },
        ],
      },
      {
        menuValue: 'Contact Messages',
        route: routes.contactMessages,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'messages-25',
        base: 'contact-messages',
        subMenus: []
      },
      {
        menuValue: 'Tickets',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'ticket-25',
        base: 'tickets',
        subMenus: [
          {
            menuValue: 'Ticket List',
            route: routes.ticketList,
            base: 'ticket-list',
          },
          {
            menuValue: 'Ticket Kanban',
            route: routes.ticketKanban,
            base: 'ticket-kanban',
          },
          {
            menuValue: 'Ticket Details',
            route: routes.ticketDetails,
            base: 'ticket-details',
          },
        ],
      },
    ],
  },
  {
    tittle: 'Administration',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Reports',
        hasSubRouteTwo: true,
        showSubRoute: false,
        icon: 'chart-35',
        base: 'reports',
        subMenus: [
          {
            menuValue: 'Item Report',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'item-report',
            subMenus: [
              {
                menuValue: 'Stock Summary',
                route: routes.stockSummary,
                base: 'stock-summary',
              },
              {
                menuValue: 'Inventory',
                route: routes.inventoryReport,
                base: 'inventory-report',
              },
              {
                menuValue: 'Best Seller',
                route: routes.bestSeller,
                base: 'best-seller',
              },
              {
                menuValue: 'Low Stock',
                route: routes.lowStock,
                base: 'low-stock',
              },
              {
                menuValue: 'Stock History',
                route: routes.stockHistory,
                base: 'stock-history',
              },
              {
                menuValue: 'Sold Stock',
                route: routes.soldStock,
                base: 'sold-stock',
              },
            ]
          },
          {
            menuValue: 'Transaction Reports',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'transcaction-report',
            subMenus: [
              {
                menuValue: 'Sales',
                route: routes.salesReport,
                base: 'sales-report',
              },
              {
                menuValue: 'Sales Return',
                route: routes.salesReturns,
                base: 'sales-returns',
              },
              {
                menuValue: 'Sales Order',
                route: routes.salesOrders,
                base: 'sales-orders',
              },
              {
                menuValue: 'Purchases',
                route: routes.purchasesReport,
                base: 'purchases-report',
              },
              {
                menuValue: 'Purchase Return',
                route: routes.purchasesReturnReport,
                base: 'purchases-return-report',
              },
              {
                menuValue: 'Purchase Orders',
                route: routes.purchasesOrdersReport,
                base: 'purchases-orders-report',
              },
              {
                menuValue: 'Quotation',
                route: routes.quotationReport,
                base: 'quotation-report',
              },
            ]
          },
          {
            menuValue: 'Finance Reports',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'finance-reports',
            subMenus: [
              {
                menuValue: 'Payment Summary',
                route: routes.paymentSummary,
                base: 'payment-summary',
              },
              {
                menuValue: 'Taxes',
                route: routes.taxReport,
                base: 'tax-report',
              },
            ]
          },
          {
            menuValue: 'Accounting Reports',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'accounting-report',
            subMenus: [
              {
                menuValue: 'Expenses',
                route: routes.expenseReport,
                base: 'expense-report',
              },
              {
                menuValue: 'Income',
                route: routes.incomeReport,
                base: 'income-report',
              },
              {
                menuValue: 'Profit & Loss',
                route: routes.profitlossReport,
                base: 'profit-loss-report',
              },
              {
                menuValue: 'Annual Report',
                route: routes.annualReport,
                base: 'annual-report',
              },
              {
                menuValue: 'Balance Sheet',
                route: routes.balanceSheet,
                base: 'balance-sheet',
              },
              {
                menuValue: 'Trial Balance',
                route: routes.trialBalance,
                base: 'trial-balance',
              },
              {
                menuValue: 'Cash Flow',
                route: routes.cashFlow,
                base: 'cash-flow',
              },
              {
                menuValue: 'Account Statement',
                route: routes.accountStatement,
                base: 'cash-flow',
              },
            ]
          },
          {
            menuValue: 'User Reports',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'user-reports',
            subMenus: [
              {
                menuValue: 'Customers',
                route: routes.customerReport,
                base: 'customer-reports',
              },
              {
                menuValue: 'Customer Due Report',
                route: routes.customerDueReport,
                base: 'customer-due-reports',
              },
              {
                menuValue: 'Supplier',
                route: routes.supplierReport,
                base: 'supplier-reports',
              },
            ]
          },
        ],
      },
      {
        menuValue: 'Settings',
        hasSubRouteTwo: true,
        showSubRoute: false,
        icon: 'setting-25',
        base: 'settings',
        subMenus: [
          {
            menuValue: 'General Settings',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'general-settings',
            icon:'setting-2',
            subMenus: [
              {
                menuValue: 'Account Settings',
                route: routes.accountSettings,
                base: 'account-settings',
              },
              {
                menuValue: 'Security',
                route: routes.securitySettings,
                base: 'security-settings',
              },
              {
                menuValue: 'Plans & Billings',
                route: routes.plansBillings,
                base: 'plans-billings',
              },
              {
                menuValue: 'Notifications',
                route: routes.notificationSettings,
                base: 'notification-settings',
              },
              {
                menuValue: 'Integration',
                route: routes.integrationsSettings,
                base: 'integrations-settings',
              },
            ]
          },
          {
            menuValue: 'Website Settings',  
            hasSubRoute: true,
            showSubRoute: false,
            icon:'global ',
            page:'website-settings',
            subMenus: [
              {
                menuValue: 'Company Settings',
                route: routes.companySettings,
                base: 'comapany-settings',
              },
              {
                menuValue: 'Localization',
                route: routes.localizationSettings,
                base: 'localization-settings',
              },
              {
                menuValue: 'Prefixes',
                route: routes.prefixesSettings,
                base: 'prefixes-settings',
              },
              {
                menuValue: 'Preference',
                route: routes.preferenceSettings,
                base: 'preference-settings',
              },
              {
                menuValue: 'SEO Setup',
                route: routes.seoSetup,
                base: 'seo-setup',
              },
              {
                menuValue: 'Language',
                route: routes.languageSettings,
                base: 'language-settings',
              },
              {
                menuValue: 'Maintenance Mode',
                route: routes.maintenanceMode,
                base: 'maintenance-mode',
              },
              {
                menuValue: 'Authentication',
                route: routes.authenticationSettings,
                base: 'authentication-settings',
              },
              {
                menuValue: 'Ai Configuration',
                route: routes.aiConfigurationSettings,
                base: 'ai-configuration-settings',
              },
              {
                menuValue: 'Appreance',
                route: routes.appearanceSettings,
                base: 'appearance-settings',
              },
              {
                menuValue: 'Plugin Manager',
                route: routes.pluginManager,
                base: 'plugin-manager',
              },
            ]
          },  
          {
            menuValue: 'App Settings',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'app-settings',
            icon:'shapes ',
            subMenus: [
              {
                menuValue: 'Invoice Settings',
                route: routes.invoiceSettings,
                base: 'invoice-settings',
              },
              {
                menuValue: 'Invoice Templates',
                route: routes.invoiceTemplates,
                base: 'invoice-templates',
              },
              {
                menuValue: 'esignatures',
                route: routes.esignatures,
                base: 'esignatures',
              },
              {
                menuValue: 'Barcode',
                route: routes.barcodeSettings,
                base: 'barcode-settings',
              },
              {
                menuValue: 'Thermal Printer',
                route: routes.thermalPrinter,
                base: 'thermal-printer',
              },
              {
                menuValue: 'Custom Fields',
                route: routes.customFields,
                base: 'custom-fields',
              },
              {
                menuValue: 'SaaS Settings',
                route: routes.saasSettings,
                base: 'sass-settings',
              },
            ]
          },
          {
            menuValue: 'System Settings',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'system-settings',
            icon:'more-2',
            subMenus: [
              {
                menuValue: 'Email Settings',
                route: routes.emailSettings,
                base: 'email-settings',
              },
              {
                menuValue: 'Email Templates',
                route: routes.emailTemplates,
                base: 'email-templates',
              },
              {
                menuValue: 'SMS Gateways',
                route: routes.smsGateways,
                base: 'sms-gateways',
              },
              {
                menuValue: 'GDPR Cookies',
                route: routes.gdprCookies,
                base: 'gdpr-cookies',
              },
            ]
          },
          {
            menuValue: 'Finance Settings',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'finance-settings',
            icon:'money-3',
            subMenus: [
              {
                menuValue: 'Payment Methods',
                route: routes.paymentMethods,
                base: 'payment-methods',
              },
              {
                menuValue: 'Bank Accounts',
                route: routes.bankAccountsSettings,
                base: 'bank-accounts-settings',
              },
              {
                menuValue: 'Tax Rates',
                route: routes.taxRates,
                base: 'tax-rates',
              },
              {
                menuValue: 'Currencies',
                route: routes.currencies,
                base: 'currencies',
              },
            ]
          },
         
          {
            menuValue: 'Other Settings',  
            hasSubRoute: true,
            showSubRoute: false,
            page:'other-settings',
            icon:'document',
            subMenus: [
              {
                menuValue: 'Custom Css',
                route: routes.customCss,
                base: 'custom-css',
              },
              {
                menuValue: 'Custom Js',
                route: routes.customJs,
                base: 'custom-js',
              },
              {
                menuValue: 'Sitemap',
                route: routes.sitemap,
                base: 'sitemap',
              },
              {
                menuValue: 'Clear Cache',
                route: routes.clearCache,
                base: 'clear-cache',
              },
              {
                menuValue: 'Storage',
                route: routes.storage,
                base: 'storage',
              },
              {
                menuValue: 'Cronjob',
                route: routes.cronjob,
                base: 'cronjob',
              },
              {
                menuValue: 'System Backup',
                route: routes.systemBackup,
                base: 'system-backup',
              },
              {
                menuValue: 'Database Backup',
                route: routes.databaseBackup,
                base: 'database-backup',
              },
              {
                menuValue: 'System Update',
                route: routes.systemUpdate,
                base: 'system-update',
              },
            ]
          },
        ],
      },
    ],
  },
  {
    tittle: 'Layouts',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Default',
        route: routes.default,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'row-horizontal5',
        base: 'layout-default',
        subMenus: [],
      },
      {
        menuValue: 'Single',
        route: routes.single,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'grid-95',
        base: 'layout-single',
        subMenus: [],
      },
      {
        menuValue: 'Mini',
        route: routes.mini,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'grid-45',
        base: 'layout-mini',
        subMenus: [],
      },
      {
        menuValue: 'Transparent',
         route: routes.transparent,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'grid-25',
        base: 'layout-transparent',
        subMenus: [],
      },
      {
        menuValue: 'Without Header',
        route: routes.withoutHeader,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'slider-vertical-15',
        base: 'layout-without-header',
        subMenus: [],
      },
      {
        menuValue: 'RTL',
        route: routes.RTL,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'sidebar-left5',
        base: 'layout-rtl',
        subMenus: [],
      },
      {
        menuValue: 'Dark',
        route: routes.Dark,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'moon5',
        base: 'layout-dark',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'Content',
    active: false,
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Pages',
        route: routes.pages,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-15',
        base: 'pages',
        subMenus: [],
      },
      {
        menuValue: 'Blogs',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'book5',
        base: 'blogs',
        subMenus: [
          {
            menuValue: 'All Blogs',
            route: routes.allBlogs,
            base: 'all-blogs',
          },
          {
            menuValue: 'Categories',
            route: routes.blogCategories,
            base: 'blog-categories',
          },
          {
            menuValue: 'Blog Tags',
            route: routes.blogtag,
            base: 'blog-tags',
          },
          {
            menuValue: 'Comments',
            route: routes.blogcomments,
            base:  'blog-comments',
          },
        ],
      },
      {
        menuValue: 'Location',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'map5',
        base: 'location',
        subMenus: [
          {
            menuValue: 'Countries',
            route: routes.countries,
            base: 'countries',
          },
          {
            menuValue: 'States',
            route: routes.states,
            base: 'states',
          },
          {
            menuValue: 'Cities',
            route: routes.cities,
            base:'cities',
          },
        ],
      },
      {
        menuValue: 'Testimonials',
        route: routes.testimonials,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'messages-15',
        base: 'testimonial-page',
        subMenus: [],
      },
      {
        menuValue: 'FAQ',
        route: routes.faq,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'message-question5',
        base: 'faq',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'Pages',
    active: false,
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Profile',
        route: routes.profile,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'profile-tick5',
        base: 'profile',
        subMenus: [],
      },
      {
        menuValue: 'Starter',
        route: routes.starter,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-favorite5',
        base: 'starter',
      },
      {
        menuValue: 'Gallery',
        route: routes.gallery,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'image5',
        base: 'gallery',
        subMenus: [],
      },
      {
        menuValue: 'Pricing',
        route: routes.pricing,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'money-45',
        base: 'pricing',
        subMenus: [],
      },
      {
        menuValue: 'Timeline',
        route: routes.timelines,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'timer-pause5',
        base: 'timeline',
        subMenus: [],
      },
      {
        menuValue: 'Coming Soon',
        route: routes.comingSoon,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'security-time5',
        base: 'coming-soon',
        subMenus: [],
      },
      {
        menuValue: 'Under Maintenance',
        route: routes.underMaintenance,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'paintbucket5',
        base: 'under-maintenance',
        subMenus: [],
      },
      {
        menuValue: 'Under Construction',
        route: routes.underConstruction,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'forward-item5',
        base: 'under-construction',
        subMenus: [],
      },
      {
        menuValue: 'Error Pages',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'device-message5',
        base: '',
        subMenus: [
          { menuValue: 'Error 404', route: routes.error404, base: 'error-404' },
          {
            menuValue: 'Error 500',
            route: routes.error500,
            base: 'error-500',
          },
         
        ],
      },
      {
        menuValue: 'API Keys',
        route: routes.apiKeys,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'key-square5',
        base: 'api-keys',
        subMenus: [],
      },
      {
        menuValue: 'Privacy Policy',
        route: routes.privacyPolicy,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-copy5',
        base: 'privacy-policy',
        subMenus: [],
      },
      {
        menuValue: 'Terms & Conditions',
        route: routes.termsCondition,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'note-15',
        base: 'terms-condition',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'Authentication',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Login',
        route: routes.login,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'login-15',
        base: 'expenses',
        subMenus: [],
      },
      {
        menuValue: 'Register',
        route: routes.register,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'lock-15',
        base: 'payments',
        subMenus: [],
      },
      {
        menuValue: 'Forgot Password',
        route: routes.forgot_password,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'password-check5',
        base: 'payments',
        subMenus: [],
      },
      {
        menuValue: 'Reset Password',
        route: routes.resetPassword,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'refresh-right-square5',
        base: 'payments',
        subMenus: [],
      },
      {
        menuValue: 'Email Verification',
        route: routes.emailVerification,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'sms-tracking5',
        base: 'payments',
        subMenus: [],
      },
      {
        menuValue: '2 Step Verification',
        route: routes.twoStepVerification,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'security5',
        base: 'payments',
        subMenus: [],
      },
      {
        menuValue: 'Lock Screen',
        route: routes.lock_screen,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'lock-circle5',
        base: 'payments',
        subMenus: [],
      },
    ],
  },
  {
    tittle: 'UI Interface',
    active: false,
    icon: 'layers',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Base UI',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'designtools5',
        base: 'base-ui',
        subMenus: [
          {
            menuValue: 'Accordions',
            route: routes.accordions,
            base: routes.accordions,
          },
          {
            menuValue: 'Alerts',
            route: routes.alert,
            base: routes.alert,
          },
          
          { menuValue: 'Avatar', 
            route: routes.avatar, 
            base: routes.avatar 
          },
          { menuValue: 'Badges', 
            route: routes.badges, 
            base: routes.badges
           },
          {
            menuValue: 'Breadcrumb',
            route: routes.breadcrumb,
            base: routes.breadcrumb,
          },
          {
            menuValue: 'Buttons',
            route: routes.buttons,
            base: routes.buttons,
          },
          {
            menuValue: 'Button Group',
            route: routes.buttonGroup,
            base: routes.buttonGroup,
          },
          
          { menuValue: 'Cards', route: routes.cards, base: routes.cards },
          {
            menuValue: 'Carousel',
            route: routes.carousel,
            base: routes.carousel,
          },
          {
            menuValue: 'Collapse',
            route: routes.collapse,
            base: routes.collapse,
          },
          {
            menuValue: 'Dropdowns',
            route: routes.dropDown,
            base: routes.dropDown,
          },
          {
            menuValue: 'Ratio',
            route: routes.ratio,
            base: routes.ratio,
          },
          { menuValue: 'Grid', route: routes.grid, base: routes.grid },
          { menuValue: 'Images', route: routes.images, base: routes.images },
          {
            menuValue: 'Links',
            route: routes.links,
            base: routes.links,
          },
          {
            menuValue: 'List Group',
            route: routes.listGroup,
            base: routes.listGroup,
          },
          { menuValue: 'Modals', route: routes.modal, base: routes.modal },
          {
            menuValue: 'Offcanvas',
            route: routes.offcanvas,
            base: routes.offcanvas,
          },
          {
            menuValue: 'Pagination',
            route: routes.pagination,
            base: routes.pagination,
          },

          
          {
            menuValue: 'Placeholders',
            route: routes.placeholder,
            base: routes.placeholder,
          },
          {
            menuValue: 'Progress',
            route: routes.progressBars,
            base: routes.progressBars,
          },
          {
            menuValue: 'Spinner',
            route: routes.spinner,
            base: routes.rangeSlider,
          },
          { menuValue: 'Tabs', route: routes.tabs, base: routes.tabs },
          { menuValue: 'Toasts', route: routes.toasts, base: routes.toasts },
          {
            menuValue: 'Tooltip',
            route: routes.tooltip,
            base: routes.tooltip,
          },
          {
            menuValue: 'Typography',
            route: routes.typography,
            base: routes.typography,
          },
          { menuValue: 'Utilities', route: routes.utilities, base: routes.utilities },
        ],
      },
      {
        menuValue: 'Advanced UI',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'pen-tool5',
        base: 'advanced-ui',
        subMenus: [
          {
            menuValue: 'Drag & Drop',
            route: routes.dragDrop,
            base: routes.dragDrop,
          },
          {
            menuValue: 'Clipboard',
            route: routes.clipboards,
            base: routes.clipboards,
          },
          { menuValue: 'Range Slider', 
            route: routes.rangeSlider, 
            base: routes.rangeSlider 
          },
          { menuValue: 'Light Box', 
            route: routes.lightBox, 
            base: routes.lightBox 
          },
          
          
          {
            menuValue: 'Rating',
            route: routes.rating,
            base: routes.rating,
          },
          {
            menuValue: 'Text Editor',
            route: routes.textEditor,
            base: routes.textEditor,
          },
          {
            menuValue: 'Counter',
            route: routes.counter,
            base: routes.counter,
          },
          {
            menuValue: 'Scrollbar',
            route: routes.scrollbar,
            base: routes.scrollbar,
          },
        ],
      },
      {
        menuValue: 'Forms',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'password-check5',
        base: 'forms',
        subMenus: [
          {
            menuValue: 'Form Elements',
            hasSubRouteTwo2: true,
            showSubRoute: false,
            icon: 'password-check5',
            base: 'forms',
            subMenus: [
              {
                menuValue: 'Basic Inputs',
                route: routes.basicForm,
                base: routes.basicForm,
              },
              {
                menuValue: 'Checkbox & Radios',
                route: routes.checkboxRadios,
                base: routes.checkboxRadios,
              },
              {
                menuValue: 'Input Groups',
                route: routes.inputGroups,
                base: routes.inputGroups,
              },
              {
                menuValue: 'Grid & Gutters',
                route: routes.gridGutters,
                base: routes.gridGutters,
              },
              {
                menuValue: 'Input Masks',
                route: routes.formMask,
                base: routes.formMask,
              },
              {
                menuValue: 'File Uploads',
                route: routes.fileUpload,
                base: routes.fileUpload,
              },
            ]
          },
          {
            menuValue: 'Layouts',
            hasSubRouteTwo2: true,
            showSubRoute: false,
            base: 'forms',
            subMenus: [
              {
                menuValue: 'Horizontal Form',
                route: routes.horizontalForm,
                base: routes.horizontalForm,
              },
              {
                menuValue: 'Vertical Form',
                route: routes.verticalForm,
                base: routes.verticalForm,
              },
            ]
          },
          {
            menuValue: 'Form Validation',
            route: routes.formValidation,
            base: routes.formValidation,
          },
          {
            menuValue: 'Form Picker',
            route: routes.formpickers,
            base: routes.formpickers,
          },
        ],
      },
     
      {
        menuValue: 'Tables',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'grid-75',
        base: 'tables',
        subMenus: [
          {
            menuValue: 'Basic Tables',
            route: routes.basicTable,
            base: routes.basicTable,
          },
          {
            menuValue: 'Data Tables',
            route: routes.dataTable,
            base: routes.dataTable,
          },
        ],
      },
      {
        menuValue: 'Charts',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'designtools5',
        base: 'chart',
        subMenus: [
          {
            menuValue: 'Apex Charts',
            route: routes.apexChart,
            base: routes.apexChart,
          },
          {
            menuValue: 'Prime Ng Charts',
            route: routes.primeng,
            base: routes.primeng,
          }
        ],
      },
      {
        menuValue: 'Icons',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'shapes-15',
        base: 'icon',
        subMenus: [
          {
            menuValue: 'Fontawesome Icons',
            route: routes.fontawesome,
            base: routes.fontawesome,
          },
          {
            menuValue: 'Feather Icons',
            route: routes.feather,
            base: routes.feather,
          },
          {
            menuValue: 'Ionic Icons',
            route: routes.ionic,
            base: routes.ionic,
          },
          {
            menuValue: 'Material Icons',
            route: routes.material,
            base: routes.material,
          },
          { menuValue: 'pe7 Icons', route: routes.pe7, base: routes.pe7 },
          {
            menuValue: 'Simpleline Icons',
            route: routes.simpleLine,
            base: routes.simpleLine,
          },
          {
            menuValue: 'Themify Icons',
            route: routes.themify,
            base: routes.themify,
          },
          {
            menuValue: 'Weather Icons',
            route: routes.weather,
            base: routes.weather,
          },
          {
            menuValue: 'Typicon Icons',
            route: routes.typicon,
            base: routes.typicon,
          },
          { menuValue: 'Flag Icons', route: routes.flag, base: routes.flag },
        ],
      },
      {
        menuValue: 'Maps',
        route: routes.index,
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'map-15',
        base: 'maps',
        subMenus: [
          {
            menuValue: 'Leaflets',
            route: routes.leaftlet,
            base: routes.leaftlet,
          },
         
        ],
      },
    
    ],
  },

];
public sideBar2: any[]=[
  {
    tittle: 'Main',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    showSubRoute:true,
    menu: [
      {
        menuValue: 'Dashboard',
        hasSubRoute: false,
        showSubRoute: true,
        route:routes.customerDashboard,
        icon: 'home-25',
        base: 'dashboard',
        subMenus: [],
      },
      {
        menuValue: 'Quotations',
        route: routes.customerQuotations,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-normal4',
        base: 'quotations',
        subMenus: []
      },
      {
        menuValue: 'Invoices',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'document-text5',
        base: 'invoices',
        base2: 'recurring-invoices',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Invoices',
            route: routes.customerInvoices,
            base: 'invoices',
            icon: 'message-square',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Recurring Invoices',
            route: routes.customerRecurringInvoices,
            base: 'recurring-invoices',
            icon: 'calendar',
            showAsTab: false,
          },
         
        ],
      },
      {
        menuValue: 'Transactions',
        route: routes.customerTransactions,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-forward5',
        base: 'transactions',
        subMenus: []
      },
      {
        menuValue: 'Reports',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'document-upload5',
        base: 'payment-summary',
        base2: 'invoice-report',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Payment Summary',
            route: routes.customerPaymentSummary,
            base: 'payment-summary',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Invoice Report',
            route: routes.customerInvoicereport,
            base: 'invoice-report',
            showAsTab: false,
          },
         
        ],
      },
      {
        menuValue: 'Settings',
        hasSubRoute: true,
        showSubRoute: false,
        icon: 'setting-5',
        base: 'application',
        subMenus: [
          {
            separateRoute: true,
            menuValue: 'Account Settings',
            route: routes.customerAccountsettings,
            base: 'account-settings',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Security',
            route: routes.customerSecuritysettings,
            base: 'security-settings',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Plans & Billing',
            route: routes.customerPlanssettings,
            base: 'plans-billing',
            showAsTab: false,
          },
          {
            separateRoute: true,
            menuValue: 'Notification',
            route: routes.customerNotificationsettings,
            base: 'notification-settings',
            showAsTab: false,
          },
         
        ],
      },
    ],
  },
]
public sideBar3: any[]=[
  {
    tittle: 'Main',
    active: false,
    icon: 'airplay',
    showAsTab: false,
    separateRoute: false,
    showSubRoute:true,
    menu: [
      {
        menuValue: 'Dashboard',
        hasSubRoute: false,
        showSubRoute: true,
        route:routes.superAdminDashboard,
        icon: 'home-25',
        base: 'dashboard',
        subMenus: [],
      },
      {
        menuValue: 'Companies',
        route: routes.companies,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'buildings-25',
        base: 'companies',
        subMenus: []
      },
      
      {
        menuValue: 'Subscriptions',
        route: routes.subscriptions,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'receipt-text5',
        base: 'subscriptions',
        subMenus: []
      },
      {
        menuValue: 'Packages',
        route: routes.packages,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'layer5 ',
        base: 'packages',
        subMenus: []
      },
      {
        menuValue: 'Domain',
        route: routes.domain,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'global5',
        base: 'domain',
        subMenus: []
      },
      {
        menuValue: 'Purchase Transaction',
        route: routes.purchaseTransaction,
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'document-text5',
        base: 'purchase-transaction',
        subMenus: []
      },
      
    ],
  },
]
public breadCrumb:any[]=[
    {
      hasSubData:true,
      data:'Super Admin',
      route:routes.superAdminDashboard,
      data2:'Subscription',
      page:'subscriptions'
    },
    {
      hasSubData:true,
      data:'Super Admin',
      route:routes.superAdminDashboard,
      data2:'Packages',
      page:'packages'
    },
    {
      hasSubData:true,
      data:'Super Admin',
      route:routes.superAdminDashboard,
      data2:'Companies',
      page:'companies'
    },
    {
      hasSubData:true,
      data:'Super Admin',
      route:routes.superAdminDashboard,
      data2:'Domain',
      page:'domain'
    },
    {
      hasSubData:true,
      data:'Super Admin',
      route:routes.superAdminDashboard,
      data2:'Purchase Transaction',
      page:'purchase-transaction'
    },
    {
      hasSubData:false,
      data:'Payment Summary Report',
      base:'payment-summary'
    },
    {
      hasSubData:false,
      data:'Invoice Report',
      base:'invoice-report'
    },
    {
      hasSubData:false,
      data:'Quotations',
      base:'quotations'
    },
    {
      hasSubData:false,
      data:'Recurring Invoices',
      base:'recurring-invoices'
    },
    {
      hasSubData:false,
      data:'Invoices',
      base:'invoices'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'index'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'admin-dashboard'
    },
    {
      hasSubData:false,
      data:'Product',
      base:'product-list'
    },
    {
      hasSubData:false,
      data:'Product',
      base:'add-products'
    },
    {
      hasSubData:false,
      data:'Product',
      base:'edit-products'
    },
    {
      hasSubData:false,
      data:'Category',
      base:'category'
    },
    {
      hasSubData:false,
      data:'Unit',
      base:'units'
    },
    {
      hasSubData:false,
      data:'Inventory',
      base:'inventory'
    },
    {
      hasSubData:false,
      data:'Invoices',
      base:'invoice-list'
    },
    {
      hasSubData:false,
      data:'Invoice Templates',
      base:'invoice-templates'
    },
    {
      hasSubData:true,
      data:'Invoices',
      data2:'Create New Invoice',
      route:routes.invoiceList,
      page:'add-invoice'
    },
    {
      hasSubData:true,
      data:'Invoices',
      data2:'Edit Invoice',
      route:routes.invoiceList,
      page:'edit-invoice'
    },
    {
      hasSubData:false,
      data:'Invoice Detail Admin',
      base:'invoice-details'
    },
    {
      hasSubData:false,
      data:'Credit Notes',
      base:'credit-note-list'
    },
    {
      hasSubData:true,
      data:'Credit Notes',
      data2:'Add Credit Notes',
      route:routes.creditNotes,
      page:'add-credit-notes'
    },
    {
      hasSubData:true,
      data:'Credit Notes',
      data2:'Edit Credit Notes',
      route:routes.creditNotes,
      page:'edit-credit-notes'
    },
    {
      hasSubData:false,
      data:'Quotations',
      base:'quotation-list'
    },
    {
      hasSubData:true,
      data:'Quotations',
      data2:'Add Quotations',
      route:routes.quotationList,
      page:'add-quotation'
    },
    {
      hasSubData:true,
      data:'Quotations',
      data2:'Edit Quotations',
      route:routes.quotationList,
      page:'edit-quotation'
    },
    {
      hasSubData:false,
      data:'Delivery Challans',
      base:'delivery-challan-list'
    },
    {
      hasSubData:true,
      data:'Delivery Challans',
      data2:'Create New Delivery Challan',
      route:routes.deliveryChallanList,
      page:'add-delivery-challan'
    },
    {
      hasSubData:true,
      data:'Delivery Challans',
      data2:'Edit Delivery Challan',
      route:routes.deliveryChallanList,
      page:'edit-delivery-challan'
    },
    {
      hasSubData:false,
      data:'Customers',
      base:'customer-list'
    },
    {
      hasSubData:true,
      data:'Customers',
      data2:'Add New Customer',
      route:routes.customerList,
      page:'add-customer'
    },
    {
      hasSubData:true,
      data:'Customers',
      data2:'Add New Customer',
      route:routes.customerList,
      page:'edit-customer'
    },
    {
      hasSubData:false,
      data:'Purchases Order',
      base:'purchases-order-list'
    },
    {
      hasSubData:true,
      data:'Purchase Order',
      data2:'Add Purchases Order',
      route:routes.purchaseOrderList,
      page:'add-purchases-orders'
    },
    {
      hasSubData:true,
      data:'Purchase Order',
      data2:'Edit Purchases Order',
      route:routes.purchaseOrderList,
      page:'edit-purchases-orders'
    },
    {
      hasSubData:false,
      data:'Debit Notes',
      base:'debit-note-list'
    },
    {
      hasSubData:false,
      data:'Purchase',
      base:'purchase-list'
    },
    {
      hasSubData:true,
      data:'Debit Notes',
      data2:'Add Debit Note',
      route:routes.debitNoteList,
      page:'add-debit-notes'
    },
    {
      hasSubData:true,
      data:'Purchase',
      data2:'Add Purchase',
      route:routes.purchaseList,
      page:'add-purchase'
    },
    {
      hasSubData:true,
      data:'Purchase',
      data2:'Edit Purchase',
      route:routes.purchaseList,
      page:'edit-purchase'
    },
    {
      hasSubData:true,
      data:'Purchase',
      data2:'Edit Debit Note',
      route:routes.debitNoteList,
      page:'edit-debit-notes'
    },
    {
      hasSubData:false,
      data:'Suppliers',
      base:'suppliers'
    },
    {
      hasSubData:false,
      data:'Supplier Payments',
      base:'supplier-payments'
    },
    {
      hasSubData:false,
      data:'Expenses',
      base:'expense'
    },
    {
      hasSubData:false,
      data:'Income',
      base:'incomes'
    },
    {
      hasSubData:false,
      data:'Payments',
      base:'payments'
    },
    {
      hasSubData:false,
      data:'Transactions',
      base:'transactions'
    },
    {
      hasSubData:false,
      data:'Bank Accounts',
      base:'bank-accounts-list'
    },
    {
      hasSubData:false,
      data:'Money Transfer',
      base:'money-transfer'
    },
    {
      hasSubData:true,
      data:'Bank Accounts',
      data2:'Bank Accounts Type',
      route:routes.bankAccountList,
      page:'bank-accounts-type'
    },
    {
      hasSubData:true,
      data:'Roles',
      data2:'Permission',
      route:routes.rolesPermissions,
      page:'permission'
    },
    {
      hasSubData:false,
      data:'Roles & Permission',
      base:'roles-permissions'
    },
    {
      hasSubData:false,
      data:'Delete Account Request',
      base:'delete-account-request'
    },
    {
      hasSubData:false,
      data:'Users',
      base:'users'
    },
    {
      hasSubData:false,
      data:'Membership',
      base:'membership-plans'
    },
    {
      hasSubData:false,
      data:'Membership',
      base:'membership-addons'
    },

    {
      hasSubData:true,
      data:'Membership',
      data2:'Subscribes',
      route:routes.membershipPlans,
      page:'subscribers'
    },
    {
      hasSubData:true,
      data:'Membership',
      data2:'Transactions',
      route:routes.membershipPlans,
      page:'membership-transactions'
    },
    {
      hasSubData:false,
      data:'Contact Messages',
      base:'contact-messages'
    },
    {
      hasSubData:false,
      data:'Tickets List',
      base:'ticket-list'
    },
    {
      hasSubData:false,
      data:'Tickets Kanban View',
      base:'ticket-kanban'
    },
    {
      hasSubData:false,
      data:'Tickets List',
      base:'ticket-lists'
    },
    {
      hasSubData:false,
      data:'Ticket Overview',
      base:'ticket-details'
    },
    {
      hasSubData:false,
      data:'Settings',
      base:'settings'
    },
    {
      hasSubData:false,
      data:'Pages',
      base:'pages'
    },
    {
      hasSubData:true,
      data:'Blogs',
      route:routes.allBlogs,
      data2:'All Blogs',
      page:'all-blogs'
    },
    {
      hasSubData:true,
      data:'Blogs',
      route:routes.allBlogs,
      data2:'Add Blogs',
      page:'add-blogs'
    },
    {
      hasSubData:true,
      data:'Blogs',
      route:routes.allBlogs,
      data2:'Edit Blogs',
      page:'edit-blogs'
    },
    {
      hasSubData:true,
      data:'Blogs',
      route:routes.allBlogs,
      data2:'Blog Details',
      page:'blog-details'
    },
    {
      hasSubData:false,
      data:'Categories',
      base:'blog-categories'
    },
    {
      hasSubData:false,
      data:'Countries',
      base:'countries'
    },
    {
      hasSubData:false,
      data:'States',
      base:'states'
    },
    {
      hasSubData:false,
      data:'Cities',
      base:'cities'
    },
    {
      hasSubData:false,
      data:'Testimonials',
      base:'testimonials'
    },
    {
      hasSubData:false,
      data:'FAQ',
      base:'faq'
    },
    {
      hasSubData:false,
      data:'Notifications',
      base:'notifications'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Sales Report',
      page:'sales-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Sales Return',
      page:'sales-returns'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Sales Order Reports',
      page:'sales-orders'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Purchases Reports',
      page:'purchases-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Purchases Return Report',
      page:'purchase-return-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Purchases Order Report',
      page:'purchase-orders-reports'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Quotation Report',
      page:'quotation-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Expense Report',
      page:'expense-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Income Report',
      page:'income-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Profit Loss Report',
      page:'profit-loss-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Annual Report',
      page:'annual-report'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Balance Sheet',
      page:'balance-sheet'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Trial Balance',
      page:'trial-balance'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Cash Flow',
      page:'cash-flow'
    },
    {
      hasSubData:true,
      data:'Reports',
      data2:'Account Statement',
      page:'account-statement'
    },
    {
      hasSubData:false,
      data:'Profile',
      base:'profile'
    },
    {
      hasSubData:false,
      data:'Starter',
      base:'starter'
    },
    {
      hasSubData:false,
      data:'Timeline',
      base:'timeline'
    },
    {
      hasSubData:false,
      data:'Gallery',
      base:'gallery'
    },
    {
      hasSubData:false,
      data:'Pricing',
      base:'pricing'
    },
    {
      hasSubData:false,
      data:'API Keys',
      base:'api-keys'
    },
    {
      hasSubData:false,
      data:'Privacy Policy',
      base:'privacy-policy'
    },
    {
      hasSubData:false,
      data:'Terms & Condition',
      base:'terms-condition'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Chat',
      page:'chat'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Voice Call',
      page:'voice-call'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Video Call',
      page:'video-call'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Outgoing Call',
      page:'outgoing-call'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Incoming Call',
      page:'incoming-call'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Call History',
      page:'call-history'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Calender',
      page:'calender'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Email',
      page:'email'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Email',
      page:'email-reply'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'To Do',
      page:'todo'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Notes',
      page:'notes'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Kanban View',
      page:'kanban-view'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Contacts',
      page:'contacts'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Invoice',
      page:'invoice'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'File Manager',
      page:'file-manager'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Social Feed',
      page:'social-feed'
    },
    {
      hasSubData:true,
      data:'Application',
      data2:'Search List',
      page:'search-list'
    },
    {
      hasSubData:false,
      data:'Maps',
      base:'leaflets'
    },
    {
      hasSubData:false,
      data:'Fontawesome',
      base:'fontawesome'
    },
    {
      hasSubData:false,
      data:'Feather',
      base:'feather'
    },
    {
      hasSubData:false,
      data:'Ionic',
      base:'ionic'
    },
    {
      hasSubData:false,
      data:'Material',
      base:'material'
    },
    {
      hasSubData:false,
      data:'Pe7',
      base:'pe7'
    },
    {
      hasSubData:false,
      data:'Simpleline',
      base:'simple-line'
    },
    {
      hasSubData:false,
      data:'Themify',
      base:'themify'
    },
    {
      hasSubData:false,
      data:'Weather',
      base:'weather'
    },
    {
      hasSubData:false,
      data:'Typicon',
      base:'typicon'
    },
    {
      hasSubData:false,
      data:'flag',
      base:'flag'
    },
    {
      hasSubData:false,
      data:'Apex Charts',
      base:'apex-charts'
    },
    {
      hasSubData:false,
      data:'Prime Ng',
      base:'prime-ng'
    },
    {
      hasSubData:false,
      data:'Basic Table',
      base:'basic'
    },
    {
      hasSubData:false,
      data:'Data Table',
      base:'data-table'
    },
    {
      hasSubData:false,
      data:'Basic Inputs',
      base:'basic-inputs'
    },
    {
      hasSubData:false,
      data:'Checkbox & Radios',
      base:'form-checkbox-radios'
    },
    {
      hasSubData:false,
      data:'Input Groups',
      base:'input-groups'
    },
    {
      hasSubData:false,
      data:'Grid Gutters',
      base:'form-grid-gutters'
    },
    {
      hasSubData:false,
      data:'Input Mask',
      base:'form-mask'
    },
    {
      hasSubData:false,
      data:'File Upload',
      base:'file-upload'
    },
    {
      hasSubData:false,
      data:'Horizontal',
      base:'horizontal-form'
    },
    {
      hasSubData:false,
      data:'Vertical',
      base:'vertical-form'
    },
    {
      hasSubData:false,
      data:'Form Validation',
      base:'form-validation'
    },
    {
      hasSubData:false,
      data:'Form Pickers',
      base:'form-pickers'
    },
    {
      hasSubData:false,
      data:'Drag Drop',
      base:'drag-drop'
    },
    {
      hasSubData:false,
      data:'Clipboards',
      base:'clipboards'
    },
    {
      hasSubData:false,
      data:'Range Slider',
      base:'range-slider'
    },
    {
      hasSubData:false,
      data:'Light Box',
      base:'light-box'
    },
    {
      hasSubData:false,
      data:'Rating',
      base:'rating'
    },
    {
      hasSubData:false,
      data:'Text Editor',
      base:'text-editor'
    },
    {
      hasSubData:false,
      data:'Scrollbar',
      base:'scrollbar'
    },
    {
      hasSubData:false,
      data:'Counter',
      base:'counter'
    },
    {
      hasSubData:false,
      data:'Accordions',
      base:'accordions'
    },
    {
      hasSubData:false,
      data:'Alerts',
      base:'alert'
    },
    {
      hasSubData:false,
      data:'Avatar',
      base:'avatar'
    },
    {
      hasSubData:false,
      data:'Badges',
      base:'badges'
    },
    {
      hasSubData:false,
      data:'Breadcrumb',
      base:'breadcrumb'
    },
    {
      hasSubData:false,
      data:'Button Group',
      base:'button-group'
    },
    {
      hasSubData:false,
      data:'Buttons',
      base:'buttons'
    },
    {
      hasSubData:false,
      data:'Cards',
      base:'cards'
    },
    {
      hasSubData:false,
      data:'Carousel',
      base:'carousel'
    },
    {
      hasSubData:false,
      data:'Collapse',
      base:'collapse'
    },
    {
      hasSubData:false,
      data:'Dropdowns',
      base:'drop-down'
    },
    {
      hasSubData:false,
      data:'Grid',
      base:'grid'
    },
    {
      hasSubData:false,
      data:'Images',
      base:'images'
    },
    {
      hasSubData:false,
      data:'Links',
      base:'links'
    },
    {
      hasSubData:false,
      data:'List Group',
      base:'list-group'
    },
    {
      hasSubData:false,
      data:'Modals',
      base:'modal'
    },
    {
      hasSubData:false,
      data:'Offcanvas',
      base:'offcanvas'
    },
    {
      hasSubData:false,
      data:'Pagination',
      base:'pagination'
    },
    {
      hasSubData:false,
      data:'Placeholders',
      base:'placeholder'
    },
    {
      hasSubData:false,
      data:'Progress',
      base:'progress-bars'
    },
    {
      hasSubData:false,
      data:'Range Slider',
      base:'range-slider'
    },
    {
      hasSubData:false,
      data:'Ratio',
      base:'ratio'
    },
    {
      hasSubData:false,
      data:'Toasts',
      base:'toasts'
    },
    {
      hasSubData:false,
      data:'Spinner',
      base:'spinner'
    },
    {
      hasSubData:false,
      data:'Nav Tabs',
      base:'tabs'
    },
    {
      hasSubData:false,
      data:'Tooltip',
      base:'tooltip'
    },
    {
      hasSubData:false,
      data:'Typography',
      base:'typography'
    },
    {
      hasSubData:false,
      data:'Utilities',
      base:'utilities'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'dashboard'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'layout-default'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'layout-single'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'layout-mini'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'layout-transparent'
    },
    {
      hasSubData:false,
      data:'Dashboard',
      base:'layout-rtl'
    },
]
public getSideBarData: BehaviorSubject<Array<SideBarData>> =
  new BehaviorSubject<Array<SideBarData>>(this.sideBar);
public getSideBar2Data: BehaviorSubject<Array<SideBarData>> =
  new BehaviorSubject<Array<SideBarData>>(this.sideBar2);
public getSideBar3Data: BehaviorSubject<Array<SideBarData>> =
  new BehaviorSubject<Array<SideBarData>>(this.sideBar3);
public getBreadCrumb: BehaviorSubject<Array<breadCrumbData>> =
  new BehaviorSubject<Array<breadCrumbData>>(this.breadCrumb);

public resetData(): void {
  this.sideBar.map((res: SideBar ) => {
    res.showAsTab = false;
    res.menu.map((menus: SideBarMenu) => {
      menus.showSubRoute = false;
    });
  });
}
public planBillingOwl = [
  {
    name: 'Basic',
    remainingDays: '36 days remaining',
    price: '$49.99',
    billingPeriod: 'Monthly',
    text: "Cancel Subscription",
    img: 'assets/img/icons/basic.svg',
    customClass: true
  },
  {
    name: 'ENTERPRISES',
    remainingDays: '365 days remaining',
    price: '$199.99',
    billingPeriod: 'Yearly',
    text: "Upgrade",
    img: 'assets/img/icons/basic.svg',
    customClass: false
  },
  {
    name: 'Basic',
    remainingDays: '36 days remaining',
    price: '$49.99',
    billingPeriod: 'Monthly',
    text: "Cancel Subscription",
    img: 'assets/img/icons/basic.svg',
    customClass: false
  },
  {
    name: 'ENTERPRISES',
    remainingDays: '365 days remaining',
    price: '$199.99',
    billingPeriod: 'Yearly',
    text: "Upgrade",
    img: 'assets/img/icons/basic.svg',
    customClass: false
  },
];
}
