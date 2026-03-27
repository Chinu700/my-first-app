'use server';

export type ActionState = {
  success: boolean;
  message: string;
  data?: {
    name: string;
    employeeid: string;
    feedback: string;
  };
};

export async function submitFeedbackAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // Simulate network request processing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name') as string;
  const employeeid = formData.get('employeeid') as string;
  const feedback = formData.get('feedback') as string;

  // Basic validation
  if (!name || !employeeid || !feedback) {
    return {
      success: false,
      message: 'Error: All fields are required.',
    };
  }

  // Return generated ActionState with the parsed data
  return {
    success: true,
    message: 'Success: Feedback submitted via Server Action!',
    data: { name, employeeid, feedback },
  };
}
