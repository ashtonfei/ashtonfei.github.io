<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="10" lg="8" xl="6">
        <v-card variant="outlined" class="mb-4">
          <template v-slot:title>
            <div class="text-theme-red">{{ title }}</div>
          </template>
          <template v-slot:subtitle>
            <div class="d-flex">
              <span>
                {{ subtitle }}
              </span>
              <v-spacer></v-spacer>
              <span>Date: {{ date.toLocaleDateString() }}</span>
            </div>
          </template>
          <template v-slot:text>
            <p>
              This Privacy Policy explains how Ashton Fei ("we," "us," or "our")
              collects, uses, and shares your personal information in connection
              with your use of the Chalkline Google Sheets Add-On ("Chalkline").
              By using Chalkline, you consent to the collection, use, and
              sharing of your personal information as described in this Privacy
              Policy.
            </p>
          </template>
        </v-card>
        <v-card
          variant="outlined"
          class="mb-4"
          v-for="(section, i) in sections"
          :key="i"
        >
          <template v-slot:subtitle>
            <div class="d-flex text-theme-red font-weight-bold">
              <span>
                {{ section.name }}
              </span>
            </div>
          </template>
          <template v-slot:text>
            <p v-for="(line, i) in section.lines" :key="i" class="mb-4">
              {{ line }}
            </p>
          </template>
        </v-card>
        <div>
          <div class="d-xs-block d-sm-inline-block mb-4">
            <v-btn variant="tonal" prepend-icon="mdi-home" to="/" block>
              Home
            </v-btn>
          </div>
          <div class="d-xs-block d-sm-inline-block mb-4">
            <v-btn
              variant="tonal"
              prepend-icon="mdi-file-document"
              to="/chalkline/terms-of-service"
              block
            >
              Terms of Service
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "TermsOfService",
  data: () => ({
    title: "Privacy & Policy",
    subtitle: "Chalkline | Google Sheets Add-on",
    date: new Date("25/Apr/2023"),
    sections: [
      {
        name: "Information We Collect",
        lines: [
          "When you use Chalkline, we may collect the following types of information:",
          "Personal information you provide to us, such as your name and email address.",
          "Usage information, such as the pages you visit and the features you use within Chalkline.",
          "Information about your device and internet connection, such as your IP address, operating system, and browser type.",
          "We may use cookies and similar technologies to collect usage information and device information. Cookies are small text files that are stored on your device or in your browser. We may use cookies to remember your preferences and to authenticate your access to Chalkline.",
        ],
      },
      {
        name: "How We Use Your Information",
        lines: [
          "We may use your personal information to:",
          "Provide Chalkline to you and to improve and customize your experience with Chalkline.",
          "Communicate with you about Chalkline, including to respond to your inquiries and to provide technical support.",
          "Send you marketing communications about Chalkline and related products and services, if you have opted in to receive such communications.",
          "Detect, investigate, and prevent fraud and other illegal activities.",
          "We may use usage information and device information to analyze trends, administer Chalkline, and gather demographic information about our users.",
        ],
      },
      {
        name: "How We Share Your Information",
        lines: [
          "We may share your personal information with:",
          "Service providers who help us operate and improve Chalkline, such as hosting providers and technical support providers.",
          "Our affiliates, for the purposes described in this Privacy Policy.",
          "Law enforcement agencies or other governmental authorities, if we believe that such disclosure is necessary to comply with applicable laws or regulations, to respond to a subpoena, court order, or other lawful request for information we receive, or to protect our rights or the rights of third parties.",
          "We may also share your personal information in connection with a merger, acquisition, or sale of all or a portion of our assets.",
          "Your Choices",
          "You can choose not to provide personal information to us, but if you do so, we may not be able to provide Chalkline to you. You can also opt out of receiving marketing communications from us by following the instructions provided in the communications.",
        ],
      },
      {
        name: "Your Rights",
        lines: [
          "You have the right to access, correct, and delete your personal information. To exercise these rights, please contact us at yunjia.fei@gmail.com. We will respond to your request within a reasonable time.",
        ],
      },
      {
        name: "Data Retention",
        lines: [
          "We will retain your personal information for as long as necessary to provide Chalkline to you and to comply with our legal obligations, resolve disputes, and enforce our agreements.",
        ],
      },
      {
        name: "Changes to this Privacy Policy",
        lines: [
          "We may update this Privacy Policy from time to time. We will post the updated Privacy Policy on our website and indicate the date of the latest revision. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website.",
        ],
      },
      {
        name: "Contact Us",
        lines: [
          "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at yunjia.fei@gmail.com.",
        ],
      },
    ],
  }),
};
</script>
