TitledPage title="Contact"
  └── max-w-lg centered column
        ├── Card (the form)
        │     ├── CardHeader / CardTitle "Send a message"
        │     └── CardContent
        │           ├── Label + Input (Name)
        │           ├── Label + Input (Email, type=email)
        │           ├── Label + <textarea> (Message, styled like Input)
        │           └── Button "Send" (disabled + spinner while submitting)
        ├── Separator with "or" label
        └── flex row of icon-button links (GitHub, LinkedIn, Email)
              each wrapped in a Tooltip