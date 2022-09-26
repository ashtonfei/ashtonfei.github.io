const vuetify = new Vuetify();

const sectionCustomerContactDetails = {
  label: "Customer Contact Details",
  show: true,
  items: [
    {
      label: "Show Primary Contact?",
      value: true,
      checked:
        "${Quote:Customer:LastName:StartIf}\n${Quote:Customer:FirstName} ${Quote:Customer:LastName}\n${Quote:Customer:LastName:EndIf}\n${Quote:Customer:LastName:StartIfNot}\n${Quote:PrimaryContact:FirstName} ${Quote:PrimaryContact:LastName}\n${Quote:Customer:CompanyName}\n${Quote:Customer:LastName:EndIfNot}\n${Quote:Customer:PostalAddress}\n${Quote:Customer:PostalCity} ${Quote:Customer:PostalState} ${Quote:Customer:PostalZipCode}",
      unchecked:
        "${Quote:Customer:LastName:StartIf}\n${Quote:Customer:FirstName} ${Quote:Customer:LastName}\n${Quote:Customer:LastName:EndIf}\n${Quote:Customer:LastName:StartIfNot}\n${Quote:Customer:CompanyName}\n${Quote:Customer:LastName:EndIfNot}\n${Quote:Customer:PostalAddress}\n${Quote:Customer:PostalCity} ${Quote:Customer:PostalState} ${Quote:Customer:PostalZipCode}",
    },
  ],
};

const sectionAddressBox = {
  label: "Address Box Fields to Display",
  show: false,
  items: [
    { label: "Site", value: true, checked: "${Quote:Site:Name}" },
    {
      label: "Order No.",
      value: true,
      checked: "${Quote:OrderNo}\n${Quote:OrderNo:EndIf}",
    },
    {
      label: "Prepared By",
      value: true,
      checked: "${Quote:SalesPerson}",
    },
    {
      label: "Date",
      value: true,
      checked: "${Company:TodayDate}",
    },
    {
      label: "Quote No.",
      value: true,
      checked: "${Quote:No}",
    },
    {
      label: "Request No.",
      value: true,
      checked: "${Quote:RequestNo}\n${Quote:RequestNo:EndIf}",
    },
    {
      label: "Quote Name",
      value: true,
      checked: "${Quote:QuoteName}",
    },
    {
      label: "Quote Created",
      value: true,
      checked: "${Quote:CreatedDate}",
    },
    {
      label: "Valid For",
      value: true,
      checked: "${Quote:DaysValid}",
    },
    {
      label: "Valid Until",
      value: true,
      checked: "${Quote:ValidUntil}",
    },
    {
      label: "Quote Description",
      value: true,
      checked: "${Quote:Description}",
    },
  ],
};

const sectionDetails = {
  label: "Section Details",
  show: true,
  value: true,
  checked: "${Quote:Section:Start}",
  items: [
    {
      label: "TBD",
      value: true,
      checked: "TBD",
    },
  ],
};

const sectionTotal = {
  label: "Section Totals",
  show: true,
  value: true,
  checked: "${Section:Name} Subtotal",
  items: [
    {
      label: "Material Total ex Tax",
      value: true,
      checked: "${Section:MaterialTotalEx}",
    },
    {
      label: "Labour Total ex Tax",
      value: true,
      checked: "${Section:LaborTotalEx}",
    },
    {
      label: "Service Fee Total",
      value: true,
      checked: "${Section:ServiceFee}\n${Section:ServiceFee:EndIf}",
    },
    {
      label: "STCs",
      value: true,
      checked: "${Section:STC}\n${Section:STC:EndIf}",
    },
    {
      label: "Total after STCs",
      value: true,
      checked: "${Section:TotalAfterEc}\n${Section:TotalAfterEc:EndIf}",
    },
    {
      label: "Discount ex Tax",
      value: true,
      checked: "${Section:DiscountTotalEx}",
    },
    {
      label: "Subtotal Ex Tax",
      value: true,
      checked: "${Section:SubTotalEx}",
    },
    {
      label: "Tax",
      value: true,
      checked: "${Section:Tax}",
    },
    {
      label: "Material Total inc Tax",
      value: true,
      checked: "${Section:MaterialTotalInc}\n${Section:MaterialTotalInc:EndIf}",
    },
    {
      label: "Labour Total inc Tax",
      value: true,
      checked: "${Section:LaborTotalInc}\n${Section:LaborTotalInc:EndIf}",
    },
    {
      label: "Discount Inc Tax",
      value: true,
      checked: "${Section:DiscountTotalInc}",
    },
    {
      label: "Sub-Total Inc Tax",
      value: true,
      checked: "${Section:TotalInc}",
    },
    {
      label: "Section End",
      value: true,
      checked: "${Quote:Section:End}",
    },
  ],
};

const sectionQuoteTotal = {
  label: "Quote Total",
  show: false,
  items: [
    {
      label: "Material Total ex Tax",
      value: true,
      checked: "${Quote:MaterialTotalEx}",
    },
    {
      label: "Labour Total ex Tax",
      value: true,
      checked: "${Quote:LaborTotalEx}",
    },
    {
      label: "Service Fee Total",
      value: true,
      checked: "${Quote:ServiceFee}",
    },
    {
      label: "STCs",
      value: true,
      checked: "${Quote:STC}",
    },
    {
      label: "Total After STCs",
      value: true,
      checked: "${Quote:TotalAfterEc}",
    },
    {
      label: "Discount ex Tax",
      value: true,
      checked: "${Quote:DiscountTotalEx}\n${Quote:DiscountLabel:EndIf}",
    },
    {
      label: "Material Total inc Tax",
      value: true,
      checked: "${Quote:MaterialTotalInc}",
    },
    {
      label: "Labour Total inc Tax",
      value: true,
      checked: "${Quote:LaborTotalInc}",
    },
    {
      label: "Discount inc Tax",
      value: true,
      checked: "${Quote:DiscountTotalInc}\n${Quote:DiscountLabel:EndIf}",
    },
    {
      label: "Quote Total inc Tax",
      value: true,
      checked: "${Quote:TotalInc}",
    },
  ],
};

const sectionCustomerAcceptance = {
  label: "CUSTOMER ACCEPTANCE",
  show: true,
  items: [
    {
      label: "Enable Customer Acceptance Page",
      value: true,
      checked: true,
    },
  ],
};

const sectionTermsAndConditions = {
  label: "TERMS AND CONDITIONS",
  show: true,
  items: [
    {
      label: "Enable Terms and Conditions Page",
      value: true,
      checked: true,
    },
  ],
};

const sections = [
  sectionCustomerContactDetails,
  sectionAddressBox,
  sectionDetails,
  sectionTotal,
  sectionQuoteTotal,
  sectionCustomerAcceptance,
  sectionTermsAndConditions,
];

const data = {
  name: "Template Builder App - Quotes",
  loading: false,
  dialog: {
    show: false,
    label: "Dialog",
    color: "primary",
    content: "This is a test alert",
  },
  sections,
};

const methods = {
  submit() {
    this.showDialog("Submission is ready to use!", "Message | Dev", "warning");
  },
  toggleSection(index) {
    this.sections.forEach((section, i) => {
      if (i >= this.sections.length - 2) return;
      if (i !== index) return (section.show = false);
      section.show = !section.show;
    });
  },
  getSectionValues() {
    const data = [];
    this.sections.forEach((section) => {
      const sectionData = {
        label: section.label,
        value: section.value ? section.checked : null,
        items: [],
      };
      section.items.forEach(({ label, value, checked, unchecked }) => {
        if (value) {
          sectionData.items.push({
            label,
            value: checked,
          });
        } else {
          if (unchecked) {
            sectionData.items.push({
              label,
              value: unchecked,
            });
          }
        }
      });
      if (sectionData.items.length) {
        data.push(sectionData);
      }
    });
    return data;
  },
  showDialog(content, title = "Message", color = "primary") {
    this.dialog.content = content;
    this.dialog.title = title;
    this.dialog.color = color;
    this.dialog.show = true;
  },
  closeDialog() {
    this.dialog.show = false;
    this.loading = false;
  },
};

const app = new Vue({
  el: "#app",
  vuetify,
  data,
  methods,
});
