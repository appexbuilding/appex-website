---
title: Contact
meta_keywords: Contact, APPEX Builders, Canberra Builders, Master Builders.
meta_description: This is a detailed description of the page.
banner_title: Contact Us
banner_description: Please contact one of our friendly staff to talk all things homes.
banner_image: img/contact-background.jpg
modules:
  - type: C07_form
    form_id: contact
    form_title: Contact Us
    form_lead: Please complete the form below with your details and outline the
      nature of your enquiry;
    components:
      - type: FC02_text_input
        text_field_id: fullname
        text_input_label: Full Name
        text_input_placeholder: Full Name
        text_input_required: true
        text_field_error_message: Please enter your full name
        text_field_min_char: 1
        text_field_max_char: 100
      - type: FC02_text_input
        text_field_id: phone
        text_input_label: Phone Number
        text_input_placeholder: Phone Number
        text_input_required: true
        text_field_error_message: Please enter your phone number
        text_field_min_char: 1
        text_field_max_char: 100
      - type: FC01_email
        email_id: email
        email_label: Email Address
        email_placeholder: Email Address
        email_required: true
        email_error_message: Please enter an email address
      - type: FC03_text_area
        text_area_id: location
        text_area_label: Location
        text_area_placeholder: Location
        text_area_error_message: Please enter your location
        text_area_max_char: 100
        text_area_required: true
      - type: FC03_text_area
        text_area_id: how-to-help
        text_area_label: How can we help you?
        text_area_placeholder: How can we help you?
        text_area_error_message: Please enter how we can help you
        text_area_max_char: 1000
      - type: FC05_select
        select_id: heard-of-us
        select_label: We would love to know how you heard about Appex?
        select_error_message: How did you hear about appex?
        select_options:
          - option_id: google
            option_text: Google
          - option_id: word
            option_text: Word of mouth
          - option_id: other
            option_text: Other
        select_required: true
  - type: C02_rich_text
    line_break: true
    rich_text_content: |-
      * **Website**: appexbuilding.com.au
      * **Email**: info@appexbuilding.com.au
      * **Social Media:** @appexbuilding for facebook and instagram
      * **Phone:** 1300 4 APPEX
    small_container: true
---
