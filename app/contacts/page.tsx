// File: app/contacts/page.tsx

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  tags: string[];
  lastActivity: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    // Placeholder for data fetching from Supabase
    setContacts([
      {
        id: '1',
        name: 'John Doe',
        company: 'Builder Co.',
        email: 'john@builderco.com',
        phone: '0400123123',
        tags: ['Client'],
        lastActivity: '7 July 2025',
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search contacts..." className="w-1/3" />
        <Button>Add Contact</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Last Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id} onClick={() => setSelectedContact(contact)} className="cursor-pointer hover:bg-gray-100">
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.tags.join(', ')}</TableCell>
              <TableCell>{contact.lastActivity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Sheet open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <SheetContent side="right" className="w-[500px]">
          <SheetHeader>
            <SheetTitle>{selectedContact?.name}</SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-2">
            <div><strong>Company:</strong> {selectedContact?.company}</div>
            <div><strong>Email:</strong> {selectedContact?.email}</div>
            <div><strong>Phone:</strong> {selectedContact?.phone}</div>
            <div><strong>Tags:</strong> {selectedContact?.tags.join(', ')}</div>
            <div><strong>Last Activity:</strong> {selectedContact?.lastActivity}</div>
          </div>

          <Tabs defaultValue="activity" className="mt-6">
            <TabsList>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="quotes">Quotes</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>
            <TabsContent value="activity">
              <ul className="mt-2 text-sm text-gray-600">
                <li>📧 Sent quote “Q-04231” – 12 June</li>
                <li>📝 Note added – 15 June</li>
                <li>📞 Call logged – 20 June</li>
              </ul>
            </TabsContent>
            <TabsContent value="quotes">No quotes available.</TabsContent>
            <TabsContent value="tasks">No tasks linked.</TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
}
