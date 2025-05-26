import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-4 gap-4">
            <Clock className="h-16 w-16 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">준비중입니다</h1>
          </div>

          <p className="mt-4 text-md text-gray-600 text-center">
            해당 페이지는 현재 준비중입니다.<br />
            빠른 시일 내에 서비스를 제공해 드리겠습니다.
          </p>
          
          <div className="mt-8 text-center">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              메인페이지로 돌아가기
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}