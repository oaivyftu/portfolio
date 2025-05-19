'use client'
import * as Sentry from '@sentry/nextjs'
import { MdBugReport } from "react-icons/md";
import {useEffect} from "react";

export default function SentryFeedbackButton() {
  return (
    <button
      onClick={async () => {cc
        // Get the instance returned by `feedbackIntegration()`
        const feedback = Sentry.getFeedback();
        const form = await feedback?.createForm();
        form.appendToDom();
        form.open();
      }}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-zinc-800"
    >
      <MdBugReport />
      Report a Bug
    </button>
  )
}