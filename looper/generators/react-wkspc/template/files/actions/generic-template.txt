---
name: Generic template
about: A template for all issues that are not UserStories, Product decisions, or ITDs
  (these are build in markdown in a separate repo)
title: ''
labels: ''
assignees: ''

---

## Context

    Replace this help text with your text:
        If this issue supports a user facing story - then add the link to the story
        If this is a bug fix then describe the bug here.
        If it is neither you probably shouldn't be doing this work

## Definition of done

    Replace this help text with your text:
        Describe how the customer/user of your part you are building will determine if it works fine.
        eg:
            An API to Create, Update, Delete Foo endpoint is available and usable via the swagger endpoint.
            An end user can create a Foo using the UI
            A list of all Foos that the user is allowed to see are visible in the table
            The UI matches the design in figma <link>
            There is a French version.
        Describe any internal process outcomes necessary. eg:
            John Doe has been informed about xyz and has signed off.

## Design
  Datamodel: ER diagram or something similar to communicate the user facing Data model. THis is not the same as DB schema, but if a db schema is necessary, include that as well.
  <details>
  <summary><b><u>High level sequence diagram</u></b></summary>

    Guidelines:
            - actors must include the end user and every major component of the system that is involved, eg: StorageGwAPI, AppManagerAPI,StorageGwUI, IdentityProvider, MyKerio
            - All the information exchanged must be listed. eg: id, name, userid. It doenstn' have to specify protocol level details, eg: the id could be in the query string, name in the payload, userId in the cookie, but this information is not required in this diagram, add it to the next diagram if necessary.

  *   <details>
      <summary><b>Detailed sequence dia: Operation X</b></summary>

        Guidelines:
                - actors must include lower level components that are involved, eg: UI components, UI pages, App, DB, API etc.
                - Actors must have fully qualified names so we know exactly where they are eg. gfi.ui.componentX
                - Each line is effectively a function call with a good descriptive function name,every individual input parameter listed and well named, and a return value in the return line.
                - Use notes if if the test is too long to add to a line.

  * <details>
    <summary><b>Detailed sequence dia: Operation Y</b></summary>

      </details>
      </details>
  </details>

## Milestones

    Guidelines:
        1. Given that these are small stories, the milestons must be at a daily release granularity
        2. Must be user facing.
           Eg of a good milestone:
           1.  The user can create storageRooms but can't edit or delete them.
           2.  The developer of  GFI pages will be notice that sorting will start to work when they use my table component.

           Eg of a really bad milesone:
           1. Work on improving the user experience while creating storage rooms
           2. Research possible solutions for the XYZ problem.
            These are tasks, they do not clarify outcomes.
        4. A milestone is considered done only if review and release is complete.
