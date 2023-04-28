<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="10" lg="8" xl="6">
        <v-card variant="outlined" class="mb-4">
          <template v-slot:title>
            <span class="text-theme-red">{{ title }}</span>
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
            <p v-for="(line, i) in lines" :key="i" class="mb-4">{{ line }}</p>
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
              prepend-icon="mdi-account-multiple"
              to="/chalkline/privacy-policy"
              block
            >
              Privacy Policy
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
    title: "Terms of Service",
    subtitle: "Chalkline | Google Sheets Add-on",
    date: new Date("25/Apr/2023"),
    lines: [
      "Thank you for using Chalkline, an add-on for Google Sheets created by Ashton Fei. By using Chalkline, you agree to the following terms of service:",
      "License: Chalkline is licensed to you on a non-exclusive, non-transferable basis for use solely in connection with Google Sheets.",
      "Ownership: Ashton Fei owns all rights, title, and interest in and to Chalkline, including all intellectual property rights.",
      "Use: You may use Chalkline solely for your own personal or business use, and you may not distribute or resell Chalkline.",
      'Warranty: Chalkline is provided "as is" without warranty of any kind, and Ashton Fei disclaims all warranties, express or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose.',
      "Limitation of Liability: In no event shall Ashton Fei be liable for any direct, indirect, incidental, special, consequential, or exemplary damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of Chalkline, even if advised of the possibility of such damage.",
      "Indemnification: You agree to indemnify, defend, and hold Ashton Fei harmless from any and all claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising from or related to your use of Chalkline.",
      "Termination: Ashton Fei may terminate your use of Chalkline at any time without notice.",
      "Modifications: Ashton Fei reserves the right to modify these terms of service at any time, without notice. Your continued use of Chalkline following any such modification constitutes your agreement to be bound by the modified terms.",
      "If you have any questions or concerns about these terms of service, please contact Ashton Fei at yunjia.fei@gmail.com.",
    ],
  }),
};
</script>
