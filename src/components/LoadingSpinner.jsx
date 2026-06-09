function LoadingSpinner() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-red-200 border-t-red-500"></div>
    </div>
  );
}

export default LoadingSpinner;