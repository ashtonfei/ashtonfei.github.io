<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="10" lg="8" xl="6">
        <v-card variant="outlined" class="mb-4">
          <template v-slot:title>
            <span class="text-primary">{{ title }}</span>
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
            <p
              v-for="(line, i) in lines"
              :key="i"
              class="mb-4"
              v-html="line"
            ></p>
          </template>
        </v-card>
        <div>
          <div class="d-xs-block d-sm-inline-block mb-4">
            <v-btn
              variant="tonal"
              prepend-icon="mdi-account-multiple"
              to="/chalkline/privacy-policy"
              block
              >Privacy Policy</v-btn
            >
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
  name: "HomeView",
  data: () => ({
    title: "Chalkline",
    subtitle: "A Google Sheets Add-on",
    date: new Date("25/Apr/2023"),
    lines: [
      "Chalkline a Google Sheet addon designed to integrate a set of common used tools in Google Sheets.",
      "Feel free to download and install, check the video instructions here on <a class='text-primary' href='youtube.com/ashtonfei/' target='_blank'>YouTube</a>.",
    ],
  }),
};
</script>
