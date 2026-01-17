import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ContactMessage {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    createdAt: string;
}

const Admin = () => {
    const [contacts, setContacts] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("adminAuthenticated");

        if (isAuthenticated !== "true") {
            navigate("/");
            return;
        }

        const fetchContacts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/contacts");
                if (!response.ok) {
                    throw new Error("Failed to fetch contacts");
                }
                const data = await response.json();
                setContacts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Contact Messages</h1>

                {loading && <p>Loading messages...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}

                {!loading && !error && (
                    <div className="border rounded-md">
                        <Table>
                            <TableCaption>A list of recent contact messages.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead className="w-[400px]">Message</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contacts.map((contact) => (
                                    <TableRow key={contact._id}>
                                        <TableCell className="whitespace-nowrap">
                                            {format(new Date(contact.createdAt), "PPp")}
                                        </TableCell>
                                        <TableCell>{contact.fullName}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.phone || "-"}</TableCell>
                                        <TableCell>{contact.company || "-"}</TableCell>
                                        <TableCell className="max-w-[400px] truncate" title={contact.message}>
                                            {contact.message}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {contacts.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24">
                                            No messages found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Admin;
