<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card variant="text">
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="3"
                class="d-flex align-center flex-column flex-md-row"
              >
                <div>
                  <v-img
                    :src="profileImageUrl || logo"
                    aspect-ratio="1/1"
                    cover
                    alt="profile"
                    width="140"
                    class="rounded-circle"
                  ></v-img>
                </div>
                <div class="d-flex flex-md-row align-center mx-4 mt-5 mt-md-0">
                  <div class="text-center text-md-left">
                    <h1 class="text-theme-red">{{ name }}</h1>
                    <div class="text-theme-black my-4">
                      {{ title }}
                    </div>
                    <div class="d-flex justify-space-between">
                      <v-chip
                        :color="tag.color"
                        size="small"
                        variant="tonal"
                        class="rounded-pill"
                        v-for="(tag, i) in tags"
                        :class="i > 0 || i < tags.length ? 'mx-1' : ''"
                        :key="i"
                      >
                        #{{ tag.name }}
                      </v-chip>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col
                cols="12"
                sm="12"
                md="3"
                class="d-flex flex-md-column align-center text-theme-black"
                style="writing-mode: vertical-rl"
              >
                <div>
                  <span> 空山新雨後 </span><br />
                  <span> 天氣晚來秋 </span><br />
                  <span> 明月鬆間照 </span><br />
                  <span> 清泉石上流 </span><br />
                  <span> 竹喧歸浣女 </span><br />
                  <span> 蓮動下漁舟 </span><br />
                  <span> 隨意春芳歇 </span><br />
                  <span> 王孫自可留 </span>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <v-card variant="text">
              <v-img :src="support" cover></v-img>
              <v-card-title primary-title> About Me </v-card-title>
              <v-card-text>
                This is Ashton Fei (费云佳) from Shenzhen, China. A scripting
                developer who is mainly focusing on daily workflow automation.
                Such as reporting, data scrapping. Solutions can be delivered
                with Google Apps Script for Google Workspace users and Excel
                VBA, Office Scripts, Power Automate for Office 365 users.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card variant="text">
              <v-card-title primary-title> My Services</v-card-title>
              <v-card-text>
                <v-list density="compact">
                  <v-list-item
                    v-for="(item, i) in services"
                    :key="i"
                    :value="item"
                    :active-color="item.color"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card variant="text">
              <v-card-title primary-title>Work Experience</v-card-title>
              <v-card-text>
                <v-list density="compact" three-lines>
                  <v-list-item
                    v-for="(item, i) in jobs"
                    :key="i"
                    :value="item"
                    :active-color="item.color"
                    :href="item.url"
                    target="_blank"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.year.start }} to
                      {{ item.year.end }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card variant="text">
              <v-card-title primary-title> Certificates </v-card-title>
              <v-card-text>
                <v-responsive :aspect-ratio="4 / 3">
                  <v-carousel
                    cycle
                    hide-delimiter-background
                    show-arrows="hover"
                    hide-delimiters
                    height="auto"
                  >
                    <v-carousel-item
                      v-for="(item, i) in certificates"
                      :key="i"
                      cover
                      :src="item.image"
                      :href="item.url"
                      target="_blank"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </v-responsive>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card variant="text">
              <v-card-title> Work with Me </v-card-title>
              <v-card-text>
                <div v-for="(item, i) in quickLinks" class="mb-3" :key="i">
                  <v-btn
                    :color="item.color"
                    :href="item.url"
                    target="_blank"
                    variant="tonal"
                    block
                    :prepend-icon="item.icon"
                  >
                    {{ item.name }}</v-btn
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card variant="text">
              <v-card-title primary-title> Skill Sets </v-card-title>
              <v-card-text>
                <v-chip-group column>
                  <v-chip
                    v-for="(item, i) in stacks"
                    :key="i"
                    :color="item.color"
                    variant="tonal"
                    class="rounded-pill"
                  >
                    {{ item.name }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card variant="text">
              <v-card-title primary-title> 😸 Cat Friends 😸 </v-card-title>
              <v-card-text>
                <v-responsive :aspect-ratio="1 / 1">
                  <v-carousel
                    cycle
                    hide-delimiter-background
                    show-arrows="hover"
                    hide-delimiters
                    height="auto"
                  >
                    <v-carousel-item
                      v-for="(item, i) in cats"
                      :key="i"
                      cover
                      :src="item.url"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </v-responsive>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" v-for="(item, i) in playlists" :key="i">
            <v-card variant="text">
              <v-card-title primary-title> {{ item.name }} </v-card-title>
              <v-card-text>
                <v-responsive :aspect-ratio="16 / 9">
                  <iframe
                    width="100%"
                    height="100%"
                    class="ratio-inner"
                    :src="item.link"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </v-responsive>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import logo from "@/assets/logo.svg";
import support from "@/assets/support.jpeg";
import { useMeStore } from "@/store/me.js";
const {
  name,
  title,
  tags,
  services,
  jobs,
  stacks,
  playlists,
  quickLinks,
  cats,
  certificates,
} = useMeStore();
const profileImageUrl =
  "https://user-images.githubusercontent.com/16481229/190216220-7f9963cf-1dde-4402-9946-f9f3ac32bb6d.png";
</script>
