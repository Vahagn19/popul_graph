
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "app/ui/alert-dialog";
import { ErrorContext } from "shared/Error/ui/ErrorProvider";
import { useContext } from "react";

function Modal() {
  const { error, setError, errorMessage } = useContext(ErrorContext);

  return (
    <AlertDialog open={error}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Notification!</AlertDialogTitle>
          <AlertDialogDescription>
         {errorMessage}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setError(false)}>
            Ok
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Modal;
