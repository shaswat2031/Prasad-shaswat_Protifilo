import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Component Error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Something went wrong
            </h2>
            <details className="bg-gray-900 p-4 rounded-md mb-4 whitespace-pre-wrap">
              <summary className="text-yellow-500 cursor-pointer mb-2">
                Error Details
              </summary>
              <p className="text-gray-400">
                {this.state.error && this.state.error.toString()}
              </p>
              <div className="mt-3 text-gray-500 text-sm overflow-auto">
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </div>
            </details>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
