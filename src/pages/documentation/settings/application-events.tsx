import {Stack, Typography} from "@mui/material";
import DocumentationLayout from "@/components/documentation-layout";
import {ArrowDownward, ArrowUpward, Edit} from "@mui/icons-material";

export default function ApplicationEvents() {
  return (
    <DocumentationLayout>
      <Stack spacing={2}>
        <Typography variant="h2">
          Application Events
        </Typography>
        <Typography>
          App Track applications follow a flow of steps called `Application Events` These are the states that an application can be in at any given time, and what what events can come next.
        </Typography>
        <Typography>
          On the Settings page there is button `Configure Application Events` that will bring up the Application Events configuration page.
        </Typography>
        <Typography>
          Events can be tagged as either an `Initial Step` or `Always Available`
        </Typography>
        <Typography variant={'h4'}>
          Initial Steps
        </Typography>
        <Typography>
          An event that can start the application process, the easiest example is simply the Applied event to note you have applied for a position, but this might not be comprehensive enough, a Referred event or even Head Hunted event have been added in the default configurations.
        </Typography>
        <Typography variant={'h4'}>
          Always Available
        </Typography>
        <Typography>
          These events are always available when picking the next step of an application, at any time you can chose to withdraw your application, or you may receive a rejection, but you can add or remove more events as you see fit.
        </Typography>
        <Typography variant={'h4'}>
          Add New Event
        </Typography>
        <Typography>
          Events can be added using the Add New Event button on the Configure Application Events page. This brings up a window where you can name your event, mark it as an Initial Step or Always Available, and add any possible next steps that can come after it. This window is the same if you select the <Edit fontSize="small"/> in the list of events if you wish to edit an existing event.
        </Typography>
        <Typography variant={'h4'}>
          Changing the order of events
        </Typography>
        <Typography>
          You can also order the events, This order is used to determine how far an application has progressed, and will effect the order that applications are displayed in the application list. It is best to order events so the further down in the list, the further down in the application process they are. Use the arrow keys (<ArrowUpward fontSize="small"/>,  <ArrowDownward fontSize="small" />) on the left to change the order of an an Event.
        </Typography>
      </Stack>
    </DocumentationLayout>
  )
}