import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Chirp from "@/Components/Chirp";

const Index = ({ auth, chirps }) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    message: "",
  });

  const submit = (e) => {
		e.preventDefault();
		post(route("chirps.store"), { onSuccess: () => reset() });
  };

  return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Chirps" />

			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
				<form onSubmit={submit}>
					<textarea
						value={data.message}
						placeholder="O que você tem em mente?"
						className="block w-full border-gray-300 focus:border-indigo-300
						focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
						onChange={(e) => setData("message", e.target.value)}
					/>
					<InputError message={errors.message} className="mt-2" />
					<PrimaryButton className="mt-4" disabled={processing}>
						Criar
					</PrimaryButton>
				</form>

                {chirps.map(chirp => (
                    <div key={chirp.id} className="mt-3 bg-white shadow-sm rounded-lg">
                        <Chirp chirp={chirp} />
                    </div>
                ))}
			</div>
		</AuthenticatedLayout>
  );
};

export default Index;
