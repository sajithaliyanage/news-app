from django.http import JsonResponse


class ErrorResponse(JsonResponse):
    def __init__(self, error_message, isSystem=False):
        super().__init__({'success': False, 'error': error_message}, status=500 if isSystem else 400)
