const vuetify = new Vuetify();

const formData = {
  showPrimaryContact: {
    value: true,
    label: "Show Primary Contact?",
  },
};

const sectionAddressBox = {
  title: "Address Box Fields to Display",
  show: true,
  items: [
    { label: "Site", value: false, checked: "${Quote:Site:Name}" },
    {
      label: "Order No.",
      value: false,
      checked: "${Quote:OrderNo}\n${Quote:OrderNo:EndIf}",
    },
    {
      label: "Prepared By",
      value: false,
      checked: "${Quote:SalesPerson}",
    },
    {
      label: "Date",
      value: false,
      checked: "${Company:TodayDate}",
    },
    {
      label: "Quote No.",
      value: false,
      checked: "${Quote:No}",
    },
    {
      label: "Request No.",
      value: false,
      checked: "${Quote:RequestNo}\n${Quote:RequestNo:EndIf}",
    },
    {
      label: "Quote Name",
      value: false,
      checked: "${Quote:QuoteName}",
    },
    {
      label: "Quote Created",
      value: false,
      checked: "${Quote:CreatedDate}",
    },
    {
      label: "Valid For",
      value: false,
      checked: "${Quote:DaysValid}",
    },
    {
      label: "Valid Until",
      value: false,
      checked: "${Quote:ValidUntil}",
    },
    {
      label: "Quote Description",
      value: false,
      checked: "${Quote:Description}",
    },
  ],
};

const sections = [
  {
    title: "Customer Contact Details",
    show: true,
    items: [
      {
        label: "Show Primary Contact?",
        value: true,
        checked: "Checked",
        unchecked: "",
      },
    ],
  },
  sectionAddressBox,
];

const data = {
  name: "Template Builder App - Quotes",
  loading: false,
  dialog: {
    show: false,
    title: "Dialog",
    color: "primary",
    content: "This is a test alert",
  },
  formData,
  sections,
};

const methods = {
  submit() {
    this.showDialog("Submission is ready to use!", "Message | Dev", "warning");
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
