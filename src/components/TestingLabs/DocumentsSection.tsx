import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const DocumentsSection = () => {
  const { t } = useLanguage();

  const documents = (
    t.testingLabs && t.testingLabs.documents
  ) || [
    { title: "Аттестат лаборатории испытаний", url: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf" },
    { title: "Область аккредитации ЛИс", url: "https://mpovt.by/gallery/%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%98%D1%81.pdf" },
    { title: "Аттестат лаборатории метрологии", url: "https://mpovt.by/gallery/%D0%90%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%82%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C_16.07.2021.pdf" },
    { title: "Область аккредитации ЛМ", url: "https://mpovt.by/gallery/%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%9B%D0%9C.pdf" }
  ];

  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 right-1/6 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
            { (t.testingLabs && t.testingLabs.documentsHeading) || 'Документы' }
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            { (t.testingLabs && t.testingLabs.documentsDescription) || 'Аттестаты аккредитации и области деятельности наших лабораторий' }
          </p>
        </div>
        <div className="grid gap-4 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <Card key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {doc.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{ (t.testingLabs && t.testingLabs.documentLabel) || 'PDF документ' }</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-400/50 hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 flex-shrink-0 ml-4 shadow-lg hover:shadow-xl hover:scale-[1.02] group/btn"
                  onClick={() => window.open(doc.url, '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <Download className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">{ (t.testingLabs && t.testingLabs.documentButton) || 'PDF' }</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;