import { useNavigation } from 'react-router-dom';

function SubmitBtn({ formBtn }) {
  const navigateion = useNavigation();

  const isSubmitting = navigateion.state === 'submitting';

  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Submitting...' : 'submit'}
    </button>
  );
}

export default SubmitBtn;
