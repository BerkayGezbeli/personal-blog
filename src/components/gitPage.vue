<template>
    <v-container>
      <span class="text-h2">{{$t('git.header')}}</span>
      <div class="mt-3">
        <p class="text-subtitle-2">1 - git --version : {{ $t('git.first_content') }}</p>
        <p class="text-subtitle-2">2 - git log : {{ $t('git.second_content') }}</p>
        <p class="text-subtitle-2">3 - git branch : {{ $t('git.third_content') }}</p>
        <p class="text-subtitle-2">4 - git branch user : {{ $t('git.fourth_content') }}</p>
        <p class="text-subtitle-2">5 - git branch –d user : {{ $t('git.fifth_content') }}</p>
        <p class="text-subtitle-2">6 - git checkout user : {{ $t('git.sixth_content') }}</p>
        <p class="text-subtitle-2">7 - git status : {{ $t('git.seventh_content') }}</p>
        <p class="text-subtitle-2">8 - git stash : {{ $t('git.eighth_content') }}</p>
        <p class="text-subtitle-2">9 - git stash list : {{ $t('git.nineth_content') }}</p>
        <p class="text-subtitle-2">10 - git stash pop : {{ $t('git.tenth_content') }}</p>
        <p class="text-subtitle-2">11 - git stash apply stash@{0} : {{ $t('git.eleventh_content') }}</p>
        <p class="text-subtitle-2">12 - git stash drop stash@{1} : {{ $t('git.twelfth_content') }}</p>
        <p class="text-subtitle-2">13 - git revert commitID : {{ $t('git.thirteenth_content') }}</p>
        <p class="text-subtitle-2">14 - git reset HEAD~1 : {{ $t('git.fourteenth_content') }}</p>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  
  </style>