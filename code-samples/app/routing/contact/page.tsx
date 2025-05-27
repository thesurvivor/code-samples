import ContactForm from "@/app/components/contactform/Contactform";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="p-10">
                <h1 className="text-3xl font-bold">İletişim</h1>
                <p className="text-lg text-gray-700">Bana aşağıdaki bilgilerden ulasabilirsin</p>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
        
    );
    }