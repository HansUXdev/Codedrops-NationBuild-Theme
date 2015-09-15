module.exports = function(grunt) {

  grunt.config('copy', {


      ///////////////////////
      //  Use this to copy all the standard html theme files of your CURRENT THEME
      //  into a more managable file structure (I.E. No more )
      ///////////////////////


      // Assets
      css:{
        expand: true,
        cwd: '<%= config.themesync %>',
        src: [
          '*.css',
        ],
        dest: 'src/theme/assets/css'
      },
      sass:{
        expand: true,
        cwd: '<%= config.themesync %>',
        src: [
          '*.scss',
        ],
        dest: 'src/theme/assets/scss'
      },
      js:{
        expand: true,
        cwd: '<%= config.themesync %>',
        src: [
          '*.js',
        ],
        dest: 'src/theme/assets/js'
      },
      img:{
        expand: true,
        cwd: '<%= config.themesync %>',
        src: [
          '*.{jpg,png,svg,eps}',
        ],
        dest: 'src/theme/assets/img'
      },

      layoutFiles:{
        expand: true,
        cwd: '<%= config.layouts %>',
        src: [
          'layout.html',
          '_columns_1.html',
          '_columns_2.html',
          'splash.html',
          // 'css/**/*',
          // 'scss/**/*'
        ],
        dest: '<%= config.build %>'
      },



      pagesFiles:{
        expand: true,
        cwd: '<%= config.pages %>',
        src: [
          'pages_show_activity_stream.html',
          'pages_show_activity_stream_wide.html',
          'pages_show_basic.html',
          'pages_show_basic_wide.html',
          'pages_show_blog.html',
          'pages_show_blog_wide.html',
          'pages_show_blog_post.html',
          'pages_show_blog_post_wide.html',
          'pages_show_calendar.html',
          'pages_show_calendar_wide.html',
          'pages_show_directory.html',
          'pages_show_directory_wide.html',
          'pages_show_donation_wide.html',
          'pages_show_endorsement.html',
          'pages_show_endorsement_wide.html',
          'pages_show_event.html',
          'pages_show_event_wide.html',
          'pages_show_faq.html',
          'pages_show_faq_wide.html',
          'pages_show_feedback.html',
          'pages_show_feedback_wide.html',
          'pages_show_find_friends.html',
          'pages_show_find_friends_wide.html',
          'pages_show_followers.html',
          'pages_show_followers_wide.html',
          'pages_show_follows.html',
          'pages_show_follows_wide.html',
          'pages_show_invoices_wide.html',
          'pages_show_leaderboard.html',
          'pages_show_leaderboard_wide.html',
          'pages_show_moneybomb.html',
          'pages_show_moneybomb_wide.html',
          'pages_show_paid_membership_wide.html',
          'pages_show_petition.html',
          'pages_show_petition_wide.html',
          'pages_show_political_capital.html',
          'pages_show_political_capital_wide.html',
          'pages_show_press_release.html',
          'pages_show_press_release_wide.html',
          'pages_show_question.html',
          'pages_show_question_wide.html',
          'pages_show_recruiting.html',
          'pages_show_recruiting_wide.html',
          'pages_show_rules.html',
          'pages_show_rules_wide.html',
          'pages_show_signup.html',
          'pages_show_signup_wide.html',
          'pages_show_suggestion.html',
          'pages_show_suggestion_wide.html',
          'pages_show_suggestion_box.html',
          'pages_show_suggestion_box_wide.html',
          'pages_show_survey.html',
          'pages_show_survey_wide.html',
          'pages_show_unsubscribe.html',
          'pages_show_unsubscribe_wide.html',
          'pages_show_volunteer_signup.html',
          'pages_show_volunteer_signup_wide.html',
          'pages_show_vote_pledge.html',
          'pages_show_vote_pledge_wide.html',
          'pages_show_voter_registration.html',
          'pages_show_voter_registration_wide.html',
        ],
        dest: '<%= config.build %>'
      },
      // User editing page templates
      userFiles:{
        expand: true,
        cwd: '<%= config.user %>',
        src: [
          'users_pages_index.html',
          'users_blog_post_pages_edit.html',
          'users_event_pages_new.html',
          'users_event_pages_edit.html',
          'users_suggestion_pages_edit.html',
        ],
        dest: '<%= config.build %>'
      },
      // Account templates
      accountFiles:{
        expand: true,
        cwd: '<%= config.account %>',
        src: [
          'user_sessions_new_wide.html',
          'users_accounts_new_wide.html',
          'users_activations_new_wide.html',
          'signups_edit.html',
          'users_passwords_new_wide.html',
          'users_password_resets_new_wide.html',
        ],
        dest: '<%= config.build %>'
      },
      // Misc templates
      miscFiles:{
        expand: true,
        cwd: '<%= config.misc %>',
        src: [
          'tags_show.html',
          'profiles_show.html',
          'profiles_show_wide.html',
          'flags_page.html',
          'flags_comment.html',
          'mobile_menu.html',
          'page_not_found.html',
            // 'scss/**/*'
        ],
        dest: '<%= config.build %>'
      },
      // Includes
      includeFiles:{
        expand: true,
        cwd: '<%= config.include %>',
        src: [
          '_nav.html',
          '_supporter_nav.html',
          '_breadcrumbs.html',
          '_features.html',
          '_page_stream.html',
          '_page_byline.html',
          '_page_follow.html',
          '_page_excerpt.html',
          '_page_profile.html',
          '_page_tags.html',
          '_signup_form.html',
          '_face_tweet_form.html',
          '_flash.html',
          '_flash_share.html',
          '_flashtifications.html',
          '_next_survey_question.html',
          '_event.html',
          '_signup_show.html',
          '_shares_new.html',
          '_signup_follow.html',
          '_find_friends_facebook.html',
          '_find_friends_twitter.html',
          '_vote_pledge_yes.html',
          '_vote_pledge_unsure.html',
          '_vote_pledge.html',
          '_like_page.html',
          '_icons.scss',
          '_user_session_form.html',
          '_suggestion_tag_list.html',
          '_oauth_login_links.html',
          '_page_stream_for_suggestions.html',
          '_labeled_tags.html',
        ],
        dest: '<%= config.build %>'
      },
  ///////////END
  });


};
